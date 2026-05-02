import { WheelchairIcon as WheelchairBoldIcon } from "../bold/Wheelchair";
import { WheelchairIcon as WheelchairDuotoneIcon } from "../duotone/Wheelchair";
import { WheelchairIcon as WheelchairFillIcon } from "../fill/Wheelchair";
import { WheelchairIcon as WheelchairLightIcon } from "../light/Wheelchair";
import { WheelchairIcon as WheelchairRegularIcon } from "../regular/Wheelchair";
import { WheelchairIcon as WheelchairThinIcon } from "../thin/Wheelchair";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WheelchairThinIcon,
	light: WheelchairLightIcon,
	regular: WheelchairRegularIcon,
	bold: WheelchairBoldIcon,
	fill: WheelchairFillIcon,
	duotone: WheelchairDuotoneIcon,
} as const;

export function WheelchairIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WheelchairIcon as Wheelchair };
