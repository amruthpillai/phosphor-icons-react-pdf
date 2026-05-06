import { describe, expect, it } from "vitest";
import {
	getCoreSvgPath,
	type IconEntry,
	renderCreateIconEntry,
	renderDynamicIndex,
	renderIconRegistry,
	renderRootIconComponent,
	renderRootIndex,
	renderVariantIndex,
} from "../scripts/generate-icons";

const acorn = {
	name: "acorn",
	pascal_name: "Acorn",
} satisfies IconEntry;

describe("icon generation helpers", () => {
	it("resolves regular and weighted SVG paths from @phosphor-icons/core assets", () => {
		expect(getCoreSvgPath("/core", "acorn", "regular")).toBe(
			"/core/assets/regular/acorn.svg",
		);
		expect(getCoreSvgPath("/core", "acorn", "bold")).toBe(
			"/core/assets/bold/acorn-bold.svg",
		);
		expect(getCoreSvgPath("/core", "acorn", "duotone")).toBe(
			"/core/assets/duotone/acorn-duotone.svg",
		);
	});

	it("renders variant indexes with Phosphor-style Icon export names and compatibility aliases", () => {
		expect(renderVariantIndex([acorn])).toBe(
			'export { AcornIcon, AcornIcon as Acorn } from "./Acorn";\n',
		);
	});

	it("renders root icon components with a weight prop defaulting to regular", () => {
		const output = renderRootIconComponent(acorn);

		expect(output).toContain(
			'export function AcornIcon({ weight = "regular", ...props }: WeightedIconProps)',
		);
		expect(output).toContain("regular: AcornRegularIcon");
		expect(output).toContain("bold: AcornBoldIcon");
		expect(output).toContain("const Component = weights[weight];");
	});

	it("renders the generic Icon registry keyed by lowercase icon names", () => {
		const output = renderIconRegistry([acorn]);

		expect(output).toContain('import { AcornIcon } from "./icons/Acorn";');
		expect(output).toContain("acorn: AcornIcon");
		expect(output).toContain(
			"export type IconPropsWithName = BaseIconPropsWithName<IconName>;",
		);
		expect(output).toContain("export const Icon = createIconComponent(icons);");
	});

	it("renders root indexes without the dynamic Icon registry", () => {
		expect(renderRootIndex([acorn])).toBe(
			[
				'export type { IconPropsWithName, IconRegistry } from "./create-icon";',
				'export { createIconComponent } from "./create-icon";',
				'export type { IconProps, IconWeight, WeightedIconProps } from "./types";',
				'export { AcornIcon, AcornIcon as Acorn } from "./icons/Acorn";',
				"",
			].join("\n"),
		);
	});

	it("renders a dynamic index that opts into the full Icon registry", () => {
		expect(renderDynamicIndex()).toBe(
			[
				'export type { IconName, IconPropsWithName } from "./Icon";',
				'export { Icon, icons } from "./Icon";',
				"",
			].join("\n"),
		);
	});

	it("renders a helper-only create-icon entrypoint", () => {
		expect(renderCreateIconEntry()).toBe(
			[
				'export type { IconPropsWithName, IconRegistry } from "./create-icon";',
				'export { createIconComponent } from "./create-icon";',
				"",
			].join("\n"),
		);
	});
});
