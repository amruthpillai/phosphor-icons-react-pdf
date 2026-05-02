import { TwitterLogoIcon as TwitterLogoBoldIcon } from "../bold/TwitterLogo";
import { TwitterLogoIcon as TwitterLogoDuotoneIcon } from "../duotone/TwitterLogo";
import { TwitterLogoIcon as TwitterLogoFillIcon } from "../fill/TwitterLogo";
import { TwitterLogoIcon as TwitterLogoLightIcon } from "../light/TwitterLogo";
import { TwitterLogoIcon as TwitterLogoRegularIcon } from "../regular/TwitterLogo";
import { TwitterLogoIcon as TwitterLogoThinIcon } from "../thin/TwitterLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TwitterLogoThinIcon,
	light: TwitterLogoLightIcon,
	regular: TwitterLogoRegularIcon,
	bold: TwitterLogoBoldIcon,
	fill: TwitterLogoFillIcon,
	duotone: TwitterLogoDuotoneIcon,
} as const;

export function TwitterLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TwitterLogoIcon as TwitterLogo };
