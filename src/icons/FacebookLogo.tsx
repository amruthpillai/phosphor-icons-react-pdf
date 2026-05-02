import { FacebookLogoIcon as FacebookLogoBoldIcon } from "../bold/FacebookLogo";
import { FacebookLogoIcon as FacebookLogoDuotoneIcon } from "../duotone/FacebookLogo";
import { FacebookLogoIcon as FacebookLogoFillIcon } from "../fill/FacebookLogo";
import { FacebookLogoIcon as FacebookLogoLightIcon } from "../light/FacebookLogo";
import { FacebookLogoIcon as FacebookLogoRegularIcon } from "../regular/FacebookLogo";
import { FacebookLogoIcon as FacebookLogoThinIcon } from "../thin/FacebookLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FacebookLogoThinIcon,
	light: FacebookLogoLightIcon,
	regular: FacebookLogoRegularIcon,
	bold: FacebookLogoBoldIcon,
	fill: FacebookLogoFillIcon,
	duotone: FacebookLogoDuotoneIcon,
} as const;

export function FacebookLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FacebookLogoIcon as FacebookLogo };
