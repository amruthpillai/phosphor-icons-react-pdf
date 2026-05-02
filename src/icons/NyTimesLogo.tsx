import { NyTimesLogoIcon as NyTimesLogoBoldIcon } from "../bold/NyTimesLogo";
import { NyTimesLogoIcon as NyTimesLogoDuotoneIcon } from "../duotone/NyTimesLogo";
import { NyTimesLogoIcon as NyTimesLogoFillIcon } from "../fill/NyTimesLogo";
import { NyTimesLogoIcon as NyTimesLogoLightIcon } from "../light/NyTimesLogo";
import { NyTimesLogoIcon as NyTimesLogoRegularIcon } from "../regular/NyTimesLogo";
import { NyTimesLogoIcon as NyTimesLogoThinIcon } from "../thin/NyTimesLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NyTimesLogoThinIcon,
	light: NyTimesLogoLightIcon,
	regular: NyTimesLogoRegularIcon,
	bold: NyTimesLogoBoldIcon,
	fill: NyTimesLogoFillIcon,
	duotone: NyTimesLogoDuotoneIcon,
} as const;

export function NyTimesLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NyTimesLogoIcon as NyTimesLogo };
