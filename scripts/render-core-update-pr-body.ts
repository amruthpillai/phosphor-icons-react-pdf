import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const outputPath =
	process.env.PR_BODY_PATH ?? ".github/phosphor-core-update-pr.md";

const oldCoreVersion = requireEnv("OLD_CORE_VERSION");
const newCoreVersion = requireEnv("NEW_CORE_VERSION");
const oldPackageVersion = requireEnv("OLD_PACKAGE_VERSION");
const newPackageVersion = requireEnv("NEW_PACKAGE_VERSION");

const statusLines = execFileSync(
	"git",
	["diff", "--name-status", "--", "package.json", "pnpm-lock.yaml", "src"],
	{ encoding: "utf8" },
)
	.trim()
	.split("\n")
	.filter(Boolean);

const addedIcons = new Set<string>();
const removedIcons = new Set<string>();
let addedFiles = 0;
let removedFiles = 0;
let modifiedFiles = 0;

for (const line of statusLines) {
	const [status, firstPath, secondPath] = line.split("\t");
	const paths = [firstPath, secondPath].filter(Boolean);

	if (status.startsWith("A")) {
		addedFiles += 1;
		addIconName(addedIcons, firstPath);
		continue;
	}

	if (status.startsWith("D")) {
		removedFiles += 1;
		addIconName(removedIcons, firstPath);
		continue;
	}

	if (status.startsWith("R")) {
		removedFiles += 1;
		addedFiles += 1;
		addIconName(removedIcons, firstPath);
		addIconName(addedIcons, secondPath);
		continue;
	}

	if (paths.length > 0) {
		modifiedFiles += 1;
	}
}

const body = [
	"## Summary",
	"",
	"- Updates `@phosphor-icons/core` from " +
		`\`${oldCoreVersion}\` to \`${newCoreVersion}\`.`,
	"- Bumps `phosphor-icons-react-pdf` from " +
		`\`${oldPackageVersion}\` to \`${newPackageVersion}\`.`,
	"- Regenerates React PDF icon components from the latest Phosphor core package.",
	"",
	"## Generated Changes",
	"",
	`- Added files: ${addedFiles}`,
	`- Removed files: ${removedFiles}`,
	`- Modified files: ${modifiedFiles}`,
	"",
	"## Icons",
	"",
	renderIconList("Added icons", addedIcons),
	renderIconList("Removed icons", removedIcons),
	"",
	"## Verification",
	"",
	"- `pnpm generate`",
	"- `pnpm lint:fix`",
	"- `pnpm test`",
	"- `pnpm typecheck`",
	"- `pnpm build`",
	"",
].join("\n");

writeFileSync(outputPath, body);

function requireEnv(name: string): string {
	const value = process.env[name];

	if (!value) {
		throw new Error(`Missing required environment variable: ${name}`);
	}

	return value;
}

function addIconName(target: Set<string>, filePath: string | undefined): void {
	const match = filePath?.match(/^src\/icons\/(.+)\.tsx$/);

	if (match?.[1] && match[1] !== "index") {
		target.add(match[1]);
	}
}

function renderIconList(label: string, icons: Set<string>): string {
	if (icons.size === 0) {
		return `- ${label}: none`;
	}

	return `- ${label}: ${[...icons]
		.sort()
		.map((name) => `\`${name}\``)
		.join(", ")}`;
}
