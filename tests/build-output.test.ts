import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { build as buildWithVite } from "vite";
import { describe, expect, it } from "vitest";

const rootDirectory = resolve(import.meta.dirname, "..");
const fixtureDirectory = resolve(rootDirectory, "tests/fixtures/vite-consumer");

type BuildOutput = {
	output: Array<{
		modules?: Record<string, unknown>;
		type: string;
	}>;
};

function readDistFile(path: string): string {
	return readFileSync(resolve(rootDirectory, "dist", path), "utf8");
}

async function buildFixture(entry: string): Promise<string[]> {
	const result = await buildWithVite({
		build: {
			minify: false,
			rollupOptions: {
				external: ["@react-pdf/renderer", "react", "react/jsx-runtime"],
				input: resolve(fixtureDirectory, entry),
			},
			target: "ES2018",
			write: false,
		},
		configFile: false,
		logLevel: "silent",
		root: fixtureDirectory,
	});

	const output = (Array.isArray(result) ? result[0] : result) as BuildOutput;
	const chunks = output.output.filter(
		(item): item is { modules: Record<string, unknown>; type: "chunk" } =>
			item.type === "chunk" && item.modules !== undefined,
	);

	return chunks.flatMap((chunk) => Object.keys(chunk.modules));
}

function countPackageModules(moduleIds: string[]): number {
	return moduleIds.filter((id) =>
		id.includes("/phosphor-icons-react-pdf/dist/"),
	).length;
}

describe("built entrypoint import weight", () => {
	it("keeps the root entrypoint free of the dynamic Icon registry", () => {
		const output = readDistFile("index.es.js");

		expect(output).not.toContain('from "./Icon.es.js"');
		expect(output).not.toContain("icons =");
	});

	it("keeps the full dynamic Icon registry behind the dynamic entrypoint", () => {
		const output = readDistFile("dynamic.es.js");

		expect(output).toContain("Icon");
		expect(output).toContain("icons");
	});

	it("keeps the create-icon entrypoint free of generated icon imports", () => {
		const output = readDistFile("create-icon-entry.es.js");

		expect(output).not.toContain('from "./icons/');
		expect(output).not.toContain('from "./regular/');
		expect(output).not.toContain('from "./bold/');
	});

	it("lets a Vite consumer bundle one direct icon without pulling the registry", async () => {
		const moduleCount = countPackageModules(await buildFixture("direct.tsx"));

		expect(moduleCount).toBeLessThan(10);
	});

	it("keeps the full registry available to Vite consumers through the dynamic entrypoint", async () => {
		const moduleCount = countPackageModules(await buildFixture("dynamic.tsx"));

		expect(moduleCount).toBeGreaterThan(1_000);
	});
});
