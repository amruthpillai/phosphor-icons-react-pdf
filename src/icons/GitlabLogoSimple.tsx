import { GitlabLogoSimpleIcon as GitlabLogoSimpleBoldIcon } from "../bold/GitlabLogoSimple";
import { GitlabLogoSimpleIcon as GitlabLogoSimpleDuotoneIcon } from "../duotone/GitlabLogoSimple";
import { GitlabLogoSimpleIcon as GitlabLogoSimpleFillIcon } from "../fill/GitlabLogoSimple";
import { GitlabLogoSimpleIcon as GitlabLogoSimpleLightIcon } from "../light/GitlabLogoSimple";
import { GitlabLogoSimpleIcon as GitlabLogoSimpleRegularIcon } from "../regular/GitlabLogoSimple";
import { GitlabLogoSimpleIcon as GitlabLogoSimpleThinIcon } from "../thin/GitlabLogoSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GitlabLogoSimpleThinIcon,
	light: GitlabLogoSimpleLightIcon,
	regular: GitlabLogoSimpleRegularIcon,
	bold: GitlabLogoSimpleBoldIcon,
	fill: GitlabLogoSimpleFillIcon,
	duotone: GitlabLogoSimpleDuotoneIcon,
} as const;

export function GitlabLogoSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GitlabLogoSimpleIcon as GitlabLogoSimple };
