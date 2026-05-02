import { StripeLogoIcon as StripeLogoBoldIcon } from "../bold/StripeLogo";
import { StripeLogoIcon as StripeLogoDuotoneIcon } from "../duotone/StripeLogo";
import { StripeLogoIcon as StripeLogoFillIcon } from "../fill/StripeLogo";
import { StripeLogoIcon as StripeLogoLightIcon } from "../light/StripeLogo";
import { StripeLogoIcon as StripeLogoRegularIcon } from "../regular/StripeLogo";
import { StripeLogoIcon as StripeLogoThinIcon } from "../thin/StripeLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StripeLogoThinIcon,
	light: StripeLogoLightIcon,
	regular: StripeLogoRegularIcon,
	bold: StripeLogoBoldIcon,
	fill: StripeLogoFillIcon,
	duotone: StripeLogoDuotoneIcon,
} as const;

export function StripeLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StripeLogoIcon as StripeLogo };
