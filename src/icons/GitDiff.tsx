import { GitDiffIcon as GitDiffBoldIcon } from "../bold/GitDiff";
import { GitDiffIcon as GitDiffDuotoneIcon } from "../duotone/GitDiff";
import { GitDiffIcon as GitDiffFillIcon } from "../fill/GitDiff";
import { GitDiffIcon as GitDiffLightIcon } from "../light/GitDiff";
import { GitDiffIcon as GitDiffRegularIcon } from "../regular/GitDiff";
import { GitDiffIcon as GitDiffThinIcon } from "../thin/GitDiff";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GitDiffThinIcon,
	light: GitDiffLightIcon,
	regular: GitDiffRegularIcon,
	bold: GitDiffBoldIcon,
	fill: GitDiffFillIcon,
	duotone: GitDiffDuotoneIcon,
} as const;

export function GitDiffIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GitDiffIcon as GitDiff };
