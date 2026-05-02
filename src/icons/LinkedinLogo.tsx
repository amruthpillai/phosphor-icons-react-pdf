import { LinkedinLogoIcon as LinkedinLogoBoldIcon } from "../bold/LinkedinLogo";
import { LinkedinLogoIcon as LinkedinLogoDuotoneIcon } from "../duotone/LinkedinLogo";
import { LinkedinLogoIcon as LinkedinLogoFillIcon } from "../fill/LinkedinLogo";
import { LinkedinLogoIcon as LinkedinLogoLightIcon } from "../light/LinkedinLogo";
import { LinkedinLogoIcon as LinkedinLogoRegularIcon } from "../regular/LinkedinLogo";
import { LinkedinLogoIcon as LinkedinLogoThinIcon } from "../thin/LinkedinLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LinkedinLogoThinIcon,
	light: LinkedinLogoLightIcon,
	regular: LinkedinLogoRegularIcon,
	bold: LinkedinLogoBoldIcon,
	fill: LinkedinLogoFillIcon,
	duotone: LinkedinLogoDuotoneIcon,
} as const;

export function LinkedinLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LinkedinLogoIcon as LinkedinLogo };
