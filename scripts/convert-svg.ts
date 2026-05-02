type ConvertSvgOptions = {
	aliasName?: string;
	componentName: string;
	svg: string;
};

type SupportedTagName = keyof typeof ELEMENTS;

type SvgNode = {
	attrs: Array<[string, string]>;
	children: SvgNode[];
	tagName: SupportedTagName;
};

const ELEMENTS = {
	circle: "Circle",
	clipPath: "ClipPath",
	defs: "Defs",
	ellipse: "Ellipse",
	g: "G",
	line: "Line",
	linearGradient: "LinearGradient",
	path: "Path",
	polygon: "Polygon",
	polyline: "Polyline",
	radialGradient: "RadialGradient",
	rect: "Rect",
	stop: "Stop",
	svg: "Svg",
	text: "Text",
} as const;

const ATTRIBUTE_RENAMES = new Map<string, string>([
	["class", "className"],
	["clip-path", "clipPath"],
	["clip-rule", "clipRule"],
	["fill-opacity", "fillOpacity"],
	["fill-rule", "fillRule"],
	["font-family", "fontFamily"],
	["font-size", "fontSize"],
	["font-weight", "fontWeight"],
	["stop-color", "stopColor"],
	["stop-opacity", "stopOpacity"],
	["stroke-dasharray", "strokeDasharray"],
	["stroke-dashoffset", "strokeDashoffset"],
	["stroke-linecap", "strokeLinecap"],
	["stroke-linejoin", "strokeLinejoin"],
	["stroke-miterlimit", "strokeMiterlimit"],
	["stroke-opacity", "strokeOpacity"],
	["stroke-width", "strokeWidth"],
]);

const IMPORT_ORDER = [
	"Circle",
	"ClipPath",
	"Defs",
	"Ellipse",
	"G",
	"Line",
	"LinearGradient",
	"Path",
	"Polygon",
	"Polyline",
	"RadialGradient",
	"Rect",
	"Stop",
	"Svg",
	"Text",
];

export function convertSvgToReactPdfComponent({
	componentName,
	svg,
}: ConvertSvgOptions): string {
	const root = parseSvg(svg);
	const usedElements = new Set<string>();
	const body = renderNode(root, usedElements, 2);
	const imports = IMPORT_ORDER.filter((name) => usedElements.has(name)).join(
		", ",
	);
	const aliasName = componentName.endsWith("Icon")
		? componentName.slice(0, -"Icon".length)
		: undefined;

	return [
		`import { ${imports} } from "@react-pdf/renderer";`,
		'import type { IconProps } from "../types";',
		"",
		`export function ${componentName}({ color = "currentColor", size = 16, ...props }: IconProps) {`,
		"\treturn (",
		body,
		"\t);",
		"}",
		...(aliasName ? ["", `export { ${componentName} as ${aliasName} };`] : []),
		"",
	].join("\n");
}

function parseSvg(svg: string): SvgNode {
	const cleanedSvg = svg
		.replace(/<\?xml[^>]*>/g, "")
		.replace(/<!doctype[^>]*>/gi, "")
		.replace(/<!--[\s\S]*?-->/g, "")
		.trim();
	const stack: SvgNode[] = [];
	let root: SvgNode | undefined;
	const tagPattern = /<\/?[^>]+>/g;
	let match: RegExpExecArray | null;

	while (true) {
		match = tagPattern.exec(cleanedSvg);
		if (match === null) break;

		const token = match[0];

		if (token.startsWith("</")) {
			stack.pop();
			continue;
		}

		const selfClosing = token.endsWith("/>");
		const tagContent = token.slice(1, selfClosing ? -2 : -1).trim();
		const tagName = tagContent.match(/^([:\w-]+)/)?.[1] ?? "";

		if (!isSupportedTagName(tagName)) {
			continue;
		}

		const node: SvgNode = {
			attrs: parseAttributes(tagContent.slice(tagName.length)),
			children: [],
			tagName,
		};
		const parent = stack[stack.length - 1];

		if (parent) {
			parent.children.push(node);
		} else {
			root = node;
		}

		if (!selfClosing) {
			stack.push(node);
		}
	}

	if (!root || root.tagName !== "svg") {
		throw new Error("Expected an SVG root element.");
	}

	return root;
}

function parseAttributes(input: string): Array<[string, string]> {
	const attrs: Array<[string, string]> = [];
	const attrPattern = /([:\w-]+)=["']([^"']*)["']/g;
	let match: RegExpExecArray | null;

	while (true) {
		match = attrPattern.exec(input);
		if (match === null) break;

		const [, name, value] = match;
		if (!name || value === undefined || name === "xmlns") continue;
		attrs.push([renameAttribute(name), value]);
	}

	return attrs;
}

function renameAttribute(name: string): string {
	return (
		ATTRIBUTE_RENAMES.get(name) ??
		name.replace(/-([a-z])/g, (_, char: string) => char.toUpperCase())
	);
}

function renderNode(
	node: SvgNode,
	usedElements: Set<string>,
	indentLevel: number,
): string {
	const componentName = ELEMENTS[node.tagName];
	usedElements.add(componentName);
	const indent = "\t".repeat(indentLevel);
	const attrs = renderAttributes(node);

	if (node.children.length === 0) {
		return `${indent}<${componentName}${attrs} />`;
	}

	return [
		`${indent}<${componentName}${attrs}>`,
		...node.children.map((child) =>
			renderNode(child, usedElements, indentLevel + 1),
		),
		`${indent}</${componentName}>`,
	].join("\n");
}

function renderAttributes(node: SvgNode): string {
	const attrs = node.attrs
		.filter(
			([name]) =>
				!(node.tagName === "svg" && (name === "height" || name === "width")),
		)
		.map(([name, value]) => renderAttribute(name, value));

	if (node.tagName === "svg") {
		attrs.push("width={size}", "height={size}", "{...props}");
	}

	return attrs.length > 0 ? ` ${attrs.join(" ")}` : "";
}

function renderAttribute(name: string, value: string): string {
	if ((name === "fill" || name === "stroke") && value === "currentColor") {
		return `${name}={color}`;
	}

	return `${name}=${JSON.stringify(value)}`;
}

function isSupportedTagName(tagName: string): tagName is SupportedTagName {
	return tagName in ELEMENTS;
}
