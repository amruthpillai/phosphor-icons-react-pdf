import { GooglePhotosLogoIcon as GooglePhotosLogoBoldIcon } from "../bold/GooglePhotosLogo";
import { GooglePhotosLogoIcon as GooglePhotosLogoDuotoneIcon } from "../duotone/GooglePhotosLogo";
import { GooglePhotosLogoIcon as GooglePhotosLogoFillIcon } from "../fill/GooglePhotosLogo";
import { GooglePhotosLogoIcon as GooglePhotosLogoLightIcon } from "../light/GooglePhotosLogo";
import { GooglePhotosLogoIcon as GooglePhotosLogoRegularIcon } from "../regular/GooglePhotosLogo";
import { GooglePhotosLogoIcon as GooglePhotosLogoThinIcon } from "../thin/GooglePhotosLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GooglePhotosLogoThinIcon,
	light: GooglePhotosLogoLightIcon,
	regular: GooglePhotosLogoRegularIcon,
	bold: GooglePhotosLogoBoldIcon,
	fill: GooglePhotosLogoFillIcon,
	duotone: GooglePhotosLogoDuotoneIcon,
} as const;

export function GooglePhotosLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GooglePhotosLogoIcon as GooglePhotosLogo };
