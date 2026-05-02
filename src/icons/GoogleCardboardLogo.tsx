import { GoogleCardboardLogoIcon as GoogleCardboardLogoBoldIcon } from "../bold/GoogleCardboardLogo";
import { GoogleCardboardLogoIcon as GoogleCardboardLogoDuotoneIcon } from "../duotone/GoogleCardboardLogo";
import { GoogleCardboardLogoIcon as GoogleCardboardLogoFillIcon } from "../fill/GoogleCardboardLogo";
import { GoogleCardboardLogoIcon as GoogleCardboardLogoLightIcon } from "../light/GoogleCardboardLogo";
import { GoogleCardboardLogoIcon as GoogleCardboardLogoRegularIcon } from "../regular/GoogleCardboardLogo";
import { GoogleCardboardLogoIcon as GoogleCardboardLogoThinIcon } from "../thin/GoogleCardboardLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GoogleCardboardLogoThinIcon,
	light: GoogleCardboardLogoLightIcon,
	regular: GoogleCardboardLogoRegularIcon,
	bold: GoogleCardboardLogoBoldIcon,
	fill: GoogleCardboardLogoFillIcon,
	duotone: GoogleCardboardLogoDuotoneIcon,
} as const;

export function GoogleCardboardLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GoogleCardboardLogoIcon as GoogleCardboardLogo };
