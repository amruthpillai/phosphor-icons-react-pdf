import { GooglePlayLogoIcon as GooglePlayLogoBoldIcon } from "../bold/GooglePlayLogo";
import { GooglePlayLogoIcon as GooglePlayLogoDuotoneIcon } from "../duotone/GooglePlayLogo";
import { GooglePlayLogoIcon as GooglePlayLogoFillIcon } from "../fill/GooglePlayLogo";
import { GooglePlayLogoIcon as GooglePlayLogoLightIcon } from "../light/GooglePlayLogo";
import { GooglePlayLogoIcon as GooglePlayLogoRegularIcon } from "../regular/GooglePlayLogo";
import { GooglePlayLogoIcon as GooglePlayLogoThinIcon } from "../thin/GooglePlayLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GooglePlayLogoThinIcon,
	light: GooglePlayLogoLightIcon,
	regular: GooglePlayLogoRegularIcon,
	bold: GooglePlayLogoBoldIcon,
	fill: GooglePlayLogoFillIcon,
	duotone: GooglePlayLogoDuotoneIcon,
} as const;

export function GooglePlayLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GooglePlayLogoIcon as GooglePlayLogo };
