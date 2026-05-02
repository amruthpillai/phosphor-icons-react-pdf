import { HourglassSimpleIcon as HourglassSimpleBoldIcon } from "../bold/HourglassSimple";
import { HourglassSimpleIcon as HourglassSimpleDuotoneIcon } from "../duotone/HourglassSimple";
import { HourglassSimpleIcon as HourglassSimpleFillIcon } from "../fill/HourglassSimple";
import { HourglassSimpleIcon as HourglassSimpleLightIcon } from "../light/HourglassSimple";
import { HourglassSimpleIcon as HourglassSimpleRegularIcon } from "../regular/HourglassSimple";
import { HourglassSimpleIcon as HourglassSimpleThinIcon } from "../thin/HourglassSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HourglassSimpleThinIcon,
	light: HourglassSimpleLightIcon,
	regular: HourglassSimpleRegularIcon,
	bold: HourglassSimpleBoldIcon,
	fill: HourglassSimpleFillIcon,
	duotone: HourglassSimpleDuotoneIcon,
} as const;

export function HourglassSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HourglassSimpleIcon as HourglassSimple };
