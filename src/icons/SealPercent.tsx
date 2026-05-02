import { SealPercentIcon as SealPercentBoldIcon } from "../bold/SealPercent";
import { SealPercentIcon as SealPercentDuotoneIcon } from "../duotone/SealPercent";
import { SealPercentIcon as SealPercentFillIcon } from "../fill/SealPercent";
import { SealPercentIcon as SealPercentLightIcon } from "../light/SealPercent";
import { SealPercentIcon as SealPercentRegularIcon } from "../regular/SealPercent";
import { SealPercentIcon as SealPercentThinIcon } from "../thin/SealPercent";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SealPercentThinIcon,
	light: SealPercentLightIcon,
	regular: SealPercentRegularIcon,
	bold: SealPercentBoldIcon,
	fill: SealPercentFillIcon,
	duotone: SealPercentDuotoneIcon,
} as const;

export function SealPercentIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SealPercentIcon as SealPercent };
