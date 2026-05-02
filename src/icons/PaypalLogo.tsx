import { PaypalLogoIcon as PaypalLogoBoldIcon } from "../bold/PaypalLogo";
import { PaypalLogoIcon as PaypalLogoDuotoneIcon } from "../duotone/PaypalLogo";
import { PaypalLogoIcon as PaypalLogoFillIcon } from "../fill/PaypalLogo";
import { PaypalLogoIcon as PaypalLogoLightIcon } from "../light/PaypalLogo";
import { PaypalLogoIcon as PaypalLogoRegularIcon } from "../regular/PaypalLogo";
import { PaypalLogoIcon as PaypalLogoThinIcon } from "../thin/PaypalLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PaypalLogoThinIcon,
	light: PaypalLogoLightIcon,
	regular: PaypalLogoRegularIcon,
	bold: PaypalLogoBoldIcon,
	fill: PaypalLogoFillIcon,
	duotone: PaypalLogoDuotoneIcon,
} as const;

export function PaypalLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PaypalLogoIcon as PaypalLogo };
