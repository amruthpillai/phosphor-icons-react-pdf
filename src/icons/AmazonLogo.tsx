import { AmazonLogoIcon as AmazonLogoBoldIcon } from "../bold/AmazonLogo";
import { AmazonLogoIcon as AmazonLogoDuotoneIcon } from "../duotone/AmazonLogo";
import { AmazonLogoIcon as AmazonLogoFillIcon } from "../fill/AmazonLogo";
import { AmazonLogoIcon as AmazonLogoLightIcon } from "../light/AmazonLogo";
import { AmazonLogoIcon as AmazonLogoRegularIcon } from "../regular/AmazonLogo";
import { AmazonLogoIcon as AmazonLogoThinIcon } from "../thin/AmazonLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AmazonLogoThinIcon,
	light: AmazonLogoLightIcon,
	regular: AmazonLogoRegularIcon,
	bold: AmazonLogoBoldIcon,
	fill: AmazonLogoFillIcon,
	duotone: AmazonLogoDuotoneIcon,
} as const;

export function AmazonLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AmazonLogoIcon as AmazonLogo };
