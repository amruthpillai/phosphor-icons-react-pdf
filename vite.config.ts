import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";
import pkg from "./package.json" with { type: "json" };

const peerDependencies = Object.keys(pkg.peerDependencies);

const externalDependencies = new Set([
	...peerDependencies,
	"react/jsx-runtime",
]);

const iconWeights = [
	"thin",
	"light",
	"regular",
	"bold",
	"fill",
	"duotone",
] as const;

const variantInputs = Object.fromEntries(
	iconWeights.map((weight) => [
		`${weight}/index`,
		resolve(import.meta.dirname, `src/${weight}/index.ts`),
	]),
);

export default defineConfig({
	plugins: [react(), dts({ include: ["src"], insertTypesEntry: true })],

	test: {
		globals: true,
		environment: "node",
		coverage: {
			exclude: [
				"**/dist/**",
				"coverage/**",
				"src/bold/**",
				"src/duotone/**",
				"src/fill/**",
				"src/Icon.tsx",
				"src/icons/**",
				"src/index.ts",
				"src/light/**",
				"src/regular/**",
				"src/thin/**",
				"src/types.ts",
				"tests/**",
				"vite.config.ts",
			],
			include: [
				"scripts/convert-svg.ts",
				"scripts/generate-icons.ts",
				"src/create-icon.tsx",
			],
			reporter: ["text-summary"],
		},
	},

	build: {
		target: "ES2018",

		lib: {
			name: "PhosphorIconsReactPdf",
			entry: resolve(import.meta.dirname, "src/index.ts"),
			fileName: (format, name) => `${name}.${format}.js`,
		},

		rollupOptions: {
			external: (id) => externalDependencies.has(id),
			input: {
				index: resolve(import.meta.dirname, "src/index.ts"),
				"icons/index": resolve(import.meta.dirname, "src/icons/index.ts"),
				...variantInputs,
			},
			output: [
				{
					format: "es",
					entryFileNames: "[name].es.js",
					preserveModules: true,
					preserveModulesRoot: "src",
					globals: {
						react: "React",
						"@react-pdf/renderer": "ReactPDF",
					},
				},
				{
					format: "cjs",
					entryFileNames: "[name].cjs.js",
					name: "PhosphorIconsReactPdf",
					preserveModules: true,
					preserveModulesRoot: "src",
					globals: {
						react: "React",
						"@react-pdf/renderer": "ReactPDF",
					},
				},
			],
		},
	},
});
