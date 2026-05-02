import { InstagramLogoIcon as InstagramLogoBoldIcon } from "../bold/InstagramLogo";
import { InstagramLogoIcon as InstagramLogoDuotoneIcon } from "../duotone/InstagramLogo";
import { InstagramLogoIcon as InstagramLogoFillIcon } from "../fill/InstagramLogo";
import { InstagramLogoIcon as InstagramLogoLightIcon } from "../light/InstagramLogo";
import { InstagramLogoIcon as InstagramLogoRegularIcon } from "../regular/InstagramLogo";
import { InstagramLogoIcon as InstagramLogoThinIcon } from "../thin/InstagramLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: InstagramLogoThinIcon,
	light: InstagramLogoLightIcon,
	regular: InstagramLogoRegularIcon,
	bold: InstagramLogoBoldIcon,
	fill: InstagramLogoFillIcon,
	duotone: InstagramLogoDuotoneIcon,
} as const;

export function InstagramLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { InstagramLogoIcon as InstagramLogo };
