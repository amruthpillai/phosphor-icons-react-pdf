import { GitMergeIcon as GitMergeBoldIcon } from "../bold/GitMerge";
import { GitMergeIcon as GitMergeDuotoneIcon } from "../duotone/GitMerge";
import { GitMergeIcon as GitMergeFillIcon } from "../fill/GitMerge";
import { GitMergeIcon as GitMergeLightIcon } from "../light/GitMerge";
import { GitMergeIcon as GitMergeRegularIcon } from "../regular/GitMerge";
import { GitMergeIcon as GitMergeThinIcon } from "../thin/GitMerge";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GitMergeThinIcon,
	light: GitMergeLightIcon,
	regular: GitMergeRegularIcon,
	bold: GitMergeBoldIcon,
	fill: GitMergeFillIcon,
	duotone: GitMergeDuotoneIcon,
} as const;

export function GitMergeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GitMergeIcon as GitMerge };
