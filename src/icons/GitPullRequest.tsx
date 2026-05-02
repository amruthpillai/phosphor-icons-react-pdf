import { GitPullRequestIcon as GitPullRequestBoldIcon } from "../bold/GitPullRequest";
import { GitPullRequestIcon as GitPullRequestDuotoneIcon } from "../duotone/GitPullRequest";
import { GitPullRequestIcon as GitPullRequestFillIcon } from "../fill/GitPullRequest";
import { GitPullRequestIcon as GitPullRequestLightIcon } from "../light/GitPullRequest";
import { GitPullRequestIcon as GitPullRequestRegularIcon } from "../regular/GitPullRequest";
import { GitPullRequestIcon as GitPullRequestThinIcon } from "../thin/GitPullRequest";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GitPullRequestThinIcon,
	light: GitPullRequestLightIcon,
	regular: GitPullRequestRegularIcon,
	bold: GitPullRequestBoldIcon,
	fill: GitPullRequestFillIcon,
	duotone: GitPullRequestDuotoneIcon,
} as const;

export function GitPullRequestIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GitPullRequestIcon as GitPullRequest };
