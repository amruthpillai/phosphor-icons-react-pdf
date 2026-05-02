import { BehanceLogoIcon as BehanceLogoBoldIcon } from "../bold/BehanceLogo";
import { BehanceLogoIcon as BehanceLogoDuotoneIcon } from "../duotone/BehanceLogo";
import { BehanceLogoIcon as BehanceLogoFillIcon } from "../fill/BehanceLogo";
import { BehanceLogoIcon as BehanceLogoLightIcon } from "../light/BehanceLogo";
import { BehanceLogoIcon as BehanceLogoRegularIcon } from "../regular/BehanceLogo";
import { BehanceLogoIcon as BehanceLogoThinIcon } from "../thin/BehanceLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BehanceLogoThinIcon,
	light: BehanceLogoLightIcon,
	regular: BehanceLogoRegularIcon,
	bold: BehanceLogoBoldIcon,
	fill: BehanceLogoFillIcon,
	duotone: BehanceLogoDuotoneIcon,
} as const;

export function BehanceLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BehanceLogoIcon as BehanceLogo };
