import { GitCommitIcon as GitCommitBoldIcon } from "../bold/GitCommit";
import { GitCommitIcon as GitCommitDuotoneIcon } from "../duotone/GitCommit";
import { GitCommitIcon as GitCommitFillIcon } from "../fill/GitCommit";
import { GitCommitIcon as GitCommitLightIcon } from "../light/GitCommit";
import { GitCommitIcon as GitCommitRegularIcon } from "../regular/GitCommit";
import { GitCommitIcon as GitCommitThinIcon } from "../thin/GitCommit";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GitCommitThinIcon,
	light: GitCommitLightIcon,
	regular: GitCommitRegularIcon,
	bold: GitCommitBoldIcon,
	fill: GitCommitFillIcon,
	duotone: GitCommitDuotoneIcon,
} as const;

export function GitCommitIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GitCommitIcon as GitCommit };
