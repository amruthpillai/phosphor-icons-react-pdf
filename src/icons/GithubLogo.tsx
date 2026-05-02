import { GithubLogoIcon as GithubLogoBoldIcon } from "../bold/GithubLogo";
import { GithubLogoIcon as GithubLogoDuotoneIcon } from "../duotone/GithubLogo";
import { GithubLogoIcon as GithubLogoFillIcon } from "../fill/GithubLogo";
import { GithubLogoIcon as GithubLogoLightIcon } from "../light/GithubLogo";
import { GithubLogoIcon as GithubLogoRegularIcon } from "../regular/GithubLogo";
import { GithubLogoIcon as GithubLogoThinIcon } from "../thin/GithubLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GithubLogoThinIcon,
	light: GithubLogoLightIcon,
	regular: GithubLogoRegularIcon,
	bold: GithubLogoBoldIcon,
	fill: GithubLogoFillIcon,
	duotone: GithubLogoDuotoneIcon,
} as const;

export function GithubLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GithubLogoIcon as GithubLogo };
