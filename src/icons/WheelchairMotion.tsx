import { WheelchairMotionIcon as WheelchairMotionBoldIcon } from "../bold/WheelchairMotion";
import { WheelchairMotionIcon as WheelchairMotionDuotoneIcon } from "../duotone/WheelchairMotion";
import { WheelchairMotionIcon as WheelchairMotionFillIcon } from "../fill/WheelchairMotion";
import { WheelchairMotionIcon as WheelchairMotionLightIcon } from "../light/WheelchairMotion";
import { WheelchairMotionIcon as WheelchairMotionRegularIcon } from "../regular/WheelchairMotion";
import { WheelchairMotionIcon as WheelchairMotionThinIcon } from "../thin/WheelchairMotion";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WheelchairMotionThinIcon,
	light: WheelchairMotionLightIcon,
	regular: WheelchairMotionRegularIcon,
	bold: WheelchairMotionBoldIcon,
	fill: WheelchairMotionFillIcon,
	duotone: WheelchairMotionDuotoneIcon,
} as const;

export function WheelchairMotionIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WheelchairMotionIcon as WheelchairMotion };
