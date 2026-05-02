import { PercentIcon as PercentBoldIcon } from "../bold/Percent";
import { PercentIcon as PercentDuotoneIcon } from "../duotone/Percent";
import { PercentIcon as PercentFillIcon } from "../fill/Percent";
import { PercentIcon as PercentLightIcon } from "../light/Percent";
import { PercentIcon as PercentRegularIcon } from "../regular/Percent";
import { PercentIcon as PercentThinIcon } from "../thin/Percent";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PercentThinIcon,
	light: PercentLightIcon,
	regular: PercentRegularIcon,
	bold: PercentBoldIcon,
	fill: PercentFillIcon,
	duotone: PercentDuotoneIcon,
} as const;

export function PercentIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PercentIcon as Percent };
