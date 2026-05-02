import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { convertSvgToReactPdfComponent } from "../scripts/convert-svg";

const acornSvg = readFileSync(
	resolve(import.meta.dirname, "fixtures/acorn.svg"),
	"utf8",
);

describe("convertSvgToReactPdfComponent", () => {
	it("converts supported SVG elements and kebab-case attributes to React-PDF JSX", () => {
		const output = convertSvgToReactPdfComponent({
			componentName: "AcornIcon",
			svg: acornSvg,
		});

		expect(output).toContain(
			'import { Path, Rect, Svg } from "@react-pdf/renderer";',
		);
		expect(output).toContain('import type { IconProps } from "../types";');
		expect(output).toContain("export function AcornIcon");
		expect(output).toContain(
			'<Svg viewBox="0 0 256 256" width={size} height={size} {...props}>',
		);
		expect(output).toContain('<Rect width="256" height="256" fill="none" />');
		expect(output).toContain("stroke={color}");
		expect(output).toContain('strokeLinecap="round"');
		expect(output).toContain('strokeLinejoin="round"');
		expect(output).toContain('strokeWidth="24"');
	});
});
