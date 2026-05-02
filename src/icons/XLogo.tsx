import { XLogoIcon as XLogoBoldIcon } from "../bold/XLogo";
import { XLogoIcon as XLogoDuotoneIcon } from "../duotone/XLogo";
import { XLogoIcon as XLogoFillIcon } from "../fill/XLogo";
import { XLogoIcon as XLogoLightIcon } from "../light/XLogo";
import { XLogoIcon as XLogoRegularIcon } from "../regular/XLogo";
import { XLogoIcon as XLogoThinIcon } from "../thin/XLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: XLogoThinIcon,
	light: XLogoLightIcon,
	regular: XLogoRegularIcon,
	bold: XLogoBoldIcon,
	fill: XLogoFillIcon,
	duotone: XLogoDuotoneIcon,
} as const;

export function XLogoIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { XLogoIcon as XLogo };
