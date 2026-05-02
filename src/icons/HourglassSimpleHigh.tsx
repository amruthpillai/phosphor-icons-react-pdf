import { HourglassSimpleHighIcon as HourglassSimpleHighBoldIcon } from "../bold/HourglassSimpleHigh";
import { HourglassSimpleHighIcon as HourglassSimpleHighDuotoneIcon } from "../duotone/HourglassSimpleHigh";
import { HourglassSimpleHighIcon as HourglassSimpleHighFillIcon } from "../fill/HourglassSimpleHigh";
import { HourglassSimpleHighIcon as HourglassSimpleHighLightIcon } from "../light/HourglassSimpleHigh";
import { HourglassSimpleHighIcon as HourglassSimpleHighRegularIcon } from "../regular/HourglassSimpleHigh";
import { HourglassSimpleHighIcon as HourglassSimpleHighThinIcon } from "../thin/HourglassSimpleHigh";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HourglassSimpleHighThinIcon,
	light: HourglassSimpleHighLightIcon,
	regular: HourglassSimpleHighRegularIcon,
	bold: HourglassSimpleHighBoldIcon,
	fill: HourglassSimpleHighFillIcon,
	duotone: HourglassSimpleHighDuotoneIcon,
} as const;

export function HourglassSimpleHighIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HourglassSimpleHighIcon as HourglassSimpleHigh };
