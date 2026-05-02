import { GitlabLogoIcon as GitlabLogoBoldIcon } from "../bold/GitlabLogo";
import { GitlabLogoIcon as GitlabLogoDuotoneIcon } from "../duotone/GitlabLogo";
import { GitlabLogoIcon as GitlabLogoFillIcon } from "../fill/GitlabLogo";
import { GitlabLogoIcon as GitlabLogoLightIcon } from "../light/GitlabLogo";
import { GitlabLogoIcon as GitlabLogoRegularIcon } from "../regular/GitlabLogo";
import { GitlabLogoIcon as GitlabLogoThinIcon } from "../thin/GitlabLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GitlabLogoThinIcon,
	light: GitlabLogoLightIcon,
	regular: GitlabLogoRegularIcon,
	bold: GitlabLogoBoldIcon,
	fill: GitlabLogoFillIcon,
	duotone: GitlabLogoDuotoneIcon,
} as const;

export function GitlabLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GitlabLogoIcon as GitlabLogo };
