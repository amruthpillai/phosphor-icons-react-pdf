import { execFileSync } from "node:child_process";
import {
	existsSync,
	mkdirSync,
	readdirSync,
	readFileSync,
	rmSync,
	writeFileSync,
} from "node:fs";
import { resolve } from "node:path";
import { icons as coreIcons } from "@phosphor-icons/core";
import { convertSvgToReactPdfComponent } from "./convert-svg";

export const ICON_WEIGHTS = [
	"thin",
	"light",
	"regular",
	"bold",
	"fill",
	"duotone",
] as const;

export type IconWeight = (typeof ICON_WEIGHTS)[number];

export type IconEntry = {
	name: string;
	pascal_name: string;
};

const ROOT_DIRECTORY = resolve(import.meta.dirname, "..");
const SOURCE_DIRECTORY = resolve(ROOT_DIRECTORY, "src");
const CORE_DIRECTORY =
	process.env.PHOSPHOR_CORE_DIR ??
	resolve(ROOT_DIRECTORY, "node_modules/@phosphor-icons/core");

const iconEntries = [...coreIcons].sort((a, b) =>
	comparePascalNames(a, b),
) satisfies IconEntry[];

export function getCoreSvgPath(
	coreDirectory: string,
	iconName: string,
	weight: IconWeight,
): string {
	const fileName =
		weight === "regular" ? `${iconName}.svg` : `${iconName}-${weight}.svg`;
	return `${coreDirectory}/assets/${weight}/${fileName}`;
}

export function renderVariantIndex(entries: IconEntry[]): string {
	return sortEntries(entries)
		.map((entry) => renderIconExport(entry, `./${entry.pascal_name}`))
		.join("\n")
		.concat("\n");
}

export function renderRootIconComponent(entry: IconEntry): string {
	const imports = ICON_WEIGHTS.map((weight) => {
		const localName = `${entry.pascal_name}${toPascalCase(weight)}Icon`;
		return `import { ${entry.pascal_name}Icon as ${localName} } from "../${weight}/${entry.pascal_name}";`;
	});
	const weights = ICON_WEIGHTS.map(
		(weight) => `\t${weight}: ${entry.pascal_name}${toPascalCase(weight)}Icon,`,
	);

	return [
		...imports,
		'import type { WeightedIconProps } from "../types";',
		"",
		"const weights = {",
		...weights,
		"} as const;",
		"",
		`export function ${entry.pascal_name}Icon({ weight = "regular", ...props }: WeightedIconProps) {`,
		"\tconst Component = weights[weight];",
		"",
		"\treturn <Component {...props} />;",
		"}",
		"",
		`export { ${entry.pascal_name}Icon as ${entry.pascal_name} };`,
		"",
	].join("\n");
}

export function renderIconRegistry(entries: IconEntry[]): string {
	const sortedEntries = sortEntries(entries);
	const imports = sortedEntries.map(
		(entry) =>
			`import { ${entry.pascal_name}Icon } from "./icons/${entry.pascal_name}";`,
	);
	const registryEntries = sortedEntries.map(
		(entry) => `\t${renderPropertyKey(entry.name)}: ${entry.pascal_name}Icon,`,
	);

	return [
		'import type { IconPropsWithName as BaseIconPropsWithName } from "./create-icon";',
		'import { createIconComponent } from "./create-icon";',
		...imports,
		"",
		"export const icons = {",
		...registryEntries,
		"} as const;",
		"",
		"export type IconName = keyof typeof icons;",
		"",
		"export type IconPropsWithName = BaseIconPropsWithName<IconName>;",
		"",
		"export const Icon = createIconComponent(icons);",
		"",
	].join("\n");
}

export function renderRootIndex(entries: IconEntry[]): string {
	return [
		'export type { IconPropsWithName, IconRegistry } from "./create-icon";',
		'export { createIconComponent } from "./create-icon";',
		'export type { IconProps, IconWeight, WeightedIconProps } from "./types";',
		...sortEntries(entries).map((entry) =>
			renderIconExport(entry, `./icons/${entry.pascal_name}`),
		),
		"",
	].join("\n");
}

export function renderDynamicIndex(): string {
	return [
		'export type { IconName, IconPropsWithName } from "./Icon";',
		'export { Icon, icons } from "./Icon";',
		"",
	].join("\n");
}

export function renderCreateIconEntry(): string {
	return [
		'export type { IconPropsWithName, IconRegistry } from "./create-icon";',
		'export { createIconComponent } from "./create-icon";',
		"",
	].join("\n");
}

export function generateIcons(
	entries: IconEntry[] = iconEntries,
	coreDirectory = CORE_DIRECTORY,
): void {
	assertCoreDirectory(coreDirectory);
	resetGeneratedDirectories();

	for (const weight of ICON_WEIGHTS) {
		const outputDirectory = resolve(SOURCE_DIRECTORY, weight);
		mkdirSync(outputDirectory, { recursive: true });

		for (const entry of entries) {
			const svgPath = getCoreSvgPath(coreDirectory, entry.name, weight);
			const svg = readFileSync(svgPath, "utf8");
			writeFileSync(
				resolve(outputDirectory, `${entry.pascal_name}.tsx`),
				convertSvgToReactPdfComponent({
					componentName: `${entry.pascal_name}Icon`,
					svg,
				}),
			);
		}

		writeFileSync(
			resolve(outputDirectory, "index.ts"),
			renderVariantIndex(entries),
		);
	}

	const iconsDirectory = resolve(SOURCE_DIRECTORY, "icons");
	mkdirSync(iconsDirectory, { recursive: true });

	for (const entry of entries) {
		writeFileSync(
			resolve(iconsDirectory, `${entry.pascal_name}.tsx`),
			renderRootIconComponent(entry),
		);
	}

	writeFileSync(
		resolve(iconsDirectory, "index.ts"),
		renderVariantIndex(entries),
	);
	writeFileSync(
		resolve(SOURCE_DIRECTORY, "Icon.tsx"),
		renderIconRegistry(entries),
	);
	writeFileSync(
		resolve(SOURCE_DIRECTORY, "index.ts"),
		renderRootIndex(entries),
	);
	writeFileSync(resolve(SOURCE_DIRECTORY, "dynamic.ts"), renderDynamicIndex());
	writeFileSync(
		resolve(SOURCE_DIRECTORY, "create-icon-entry.ts"),
		renderCreateIconEntry(),
	);

	formatGeneratedFiles();
}

function resetGeneratedDirectories(): void {
	for (const directory of [...ICON_WEIGHTS, "icons"]) {
		rmSync(resolve(SOURCE_DIRECTORY, directory), {
			force: true,
			recursive: true,
		});
	}
}

function assertCoreDirectory(coreDirectory: string): void {
	for (const weight of ICON_WEIGHTS) {
		const directory = resolve(coreDirectory, "assets", weight);
		if (!existsSync(directory)) {
			throw new Error(
				`Missing @phosphor-icons/core assets directory: ${directory}`,
			);
		}
	}
}

function formatGeneratedFiles(): void {
	const biomeExecutable = resolve(
		ROOT_DIRECTORY,
		"node_modules",
		".bin",
		process.platform === "win32" ? "biome.cmd" : "biome",
	);

	if (!existsSync(biomeExecutable)) {
		return;
	}

	execFileSync(
		biomeExecutable,
		[
			"check",
			"--write",
			...getGeneratedSourcePaths().map((path) =>
				path.replace(`${ROOT_DIRECTORY}/`, ""),
			),
		],
		{
			cwd: ROOT_DIRECTORY,
			stdio: "inherit",
		},
	);
}

function getGeneratedSourcePaths(): string[] {
	const generatedDirectories = [...ICON_WEIGHTS, "icons"].map((directory) =>
		resolve(SOURCE_DIRECTORY, directory),
	);

	return [
		resolve(SOURCE_DIRECTORY, "Icon.tsx"),
		resolve(SOURCE_DIRECTORY, "index.ts"),
		resolve(SOURCE_DIRECTORY, "dynamic.ts"),
		resolve(SOURCE_DIRECTORY, "create-icon-entry.ts"),
		...generatedDirectories.flatMap((directory) =>
			readdirSync(directory).map((file) => resolve(directory, file)),
		),
	];
}

function toPascalCase(value: string): string {
	return value.replace(/(^|-)([a-z])/g, (_, __: string, char: string) =>
		char.toUpperCase(),
	);
}

function renderIconExport(entry: IconEntry, path: string): string {
	const line = `export { ${entry.pascal_name}Icon, ${entry.pascal_name}Icon as ${entry.pascal_name} } from "${path}";`;

	if (line.length <= 80) {
		return line;
	}

	return [
		"export {",
		`\t${entry.pascal_name}Icon,`,
		`\t${entry.pascal_name}Icon as ${entry.pascal_name},`,
		`} from "${path}";`,
	].join("\n");
}

function renderPropertyKey(name: string): string {
	return /^[A-Za-z_$][\w$]*$/.test(name) ? name : JSON.stringify(name);
}

function sortEntries(entries: IconEntry[]): IconEntry[] {
	return [...entries].sort(comparePascalNames);
}

function comparePascalNames(a: IconEntry, b: IconEntry): number {
	const nameA = a.pascal_name.toLocaleLowerCase();
	const nameB = b.pascal_name.toLocaleLowerCase();
	if (nameA < nameB) return -1;
	if (nameA > nameB) return 1;
	return 0;
}

if (process.argv[1] === new URL(import.meta.url).pathname) {
	generateIcons();
}
