import { GitBranchIcon as GitBranchBoldIcon } from "../bold/GitBranch";
import { GitBranchIcon as GitBranchDuotoneIcon } from "../duotone/GitBranch";
import { GitBranchIcon as GitBranchFillIcon } from "../fill/GitBranch";
import { GitBranchIcon as GitBranchLightIcon } from "../light/GitBranch";
import { GitBranchIcon as GitBranchRegularIcon } from "../regular/GitBranch";
import { GitBranchIcon as GitBranchThinIcon } from "../thin/GitBranch";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GitBranchThinIcon,
	light: GitBranchLightIcon,
	regular: GitBranchRegularIcon,
	bold: GitBranchBoldIcon,
	fill: GitBranchFillIcon,
	duotone: GitBranchDuotoneIcon,
} as const;

export function GitBranchIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GitBranchIcon as GitBranch };
