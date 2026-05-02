import { GoogleChromeLogoIcon as GoogleChromeLogoBoldIcon } from "../bold/GoogleChromeLogo";
import { GoogleChromeLogoIcon as GoogleChromeLogoDuotoneIcon } from "../duotone/GoogleChromeLogo";
import { GoogleChromeLogoIcon as GoogleChromeLogoFillIcon } from "../fill/GoogleChromeLogo";
import { GoogleChromeLogoIcon as GoogleChromeLogoLightIcon } from "../light/GoogleChromeLogo";
import { GoogleChromeLogoIcon as GoogleChromeLogoRegularIcon } from "../regular/GoogleChromeLogo";
import { GoogleChromeLogoIcon as GoogleChromeLogoThinIcon } from "../thin/GoogleChromeLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GoogleChromeLogoThinIcon,
	light: GoogleChromeLogoLightIcon,
	regular: GoogleChromeLogoRegularIcon,
	bold: GoogleChromeLogoBoldIcon,
	fill: GoogleChromeLogoFillIcon,
	duotone: GoogleChromeLogoDuotoneIcon,
} as const;

export function GoogleChromeLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GoogleChromeLogoIcon as GoogleChromeLogo };
