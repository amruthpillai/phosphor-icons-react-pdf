import { GoogleLogoIcon as GoogleLogoBoldIcon } from "../bold/GoogleLogo";
import { GoogleLogoIcon as GoogleLogoDuotoneIcon } from "../duotone/GoogleLogo";
import { GoogleLogoIcon as GoogleLogoFillIcon } from "../fill/GoogleLogo";
import { GoogleLogoIcon as GoogleLogoLightIcon } from "../light/GoogleLogo";
import { GoogleLogoIcon as GoogleLogoRegularIcon } from "../regular/GoogleLogo";
import { GoogleLogoIcon as GoogleLogoThinIcon } from "../thin/GoogleLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GoogleLogoThinIcon,
	light: GoogleLogoLightIcon,
	regular: GoogleLogoRegularIcon,
	bold: GoogleLogoBoldIcon,
	fill: GoogleLogoFillIcon,
	duotone: GoogleLogoDuotoneIcon,
} as const;

export function GoogleLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GoogleLogoIcon as GoogleLogo };
