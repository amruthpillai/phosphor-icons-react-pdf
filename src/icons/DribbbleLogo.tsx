import { DribbbleLogoIcon as DribbbleLogoBoldIcon } from "../bold/DribbbleLogo";
import { DribbbleLogoIcon as DribbbleLogoDuotoneIcon } from "../duotone/DribbbleLogo";
import { DribbbleLogoIcon as DribbbleLogoFillIcon } from "../fill/DribbbleLogo";
import { DribbbleLogoIcon as DribbbleLogoLightIcon } from "../light/DribbbleLogo";
import { DribbbleLogoIcon as DribbbleLogoRegularIcon } from "../regular/DribbbleLogo";
import { DribbbleLogoIcon as DribbbleLogoThinIcon } from "../thin/DribbbleLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DribbbleLogoThinIcon,
	light: DribbbleLogoLightIcon,
	regular: DribbbleLogoRegularIcon,
	bold: DribbbleLogoBoldIcon,
	fill: DribbbleLogoFillIcon,
	duotone: DribbbleLogoDuotoneIcon,
} as const;

export function DribbbleLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DribbbleLogoIcon as DribbbleLogo };
