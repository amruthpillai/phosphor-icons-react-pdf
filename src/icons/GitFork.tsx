import { GitForkIcon as GitForkBoldIcon } from "../bold/GitFork";
import { GitForkIcon as GitForkDuotoneIcon } from "../duotone/GitFork";
import { GitForkIcon as GitForkFillIcon } from "../fill/GitFork";
import { GitForkIcon as GitForkLightIcon } from "../light/GitFork";
import { GitForkIcon as GitForkRegularIcon } from "../regular/GitFork";
import { GitForkIcon as GitForkThinIcon } from "../thin/GitFork";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GitForkThinIcon,
	light: GitForkLightIcon,
	regular: GitForkRegularIcon,
	bold: GitForkBoldIcon,
	fill: GitForkFillIcon,
	duotone: GitForkDuotoneIcon,
} as const;

export function GitForkIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GitForkIcon as GitFork };
