import { HourglassSimpleMediumIcon as HourglassSimpleMediumBoldIcon } from "../bold/HourglassSimpleMedium";
import { HourglassSimpleMediumIcon as HourglassSimpleMediumDuotoneIcon } from "../duotone/HourglassSimpleMedium";
import { HourglassSimpleMediumIcon as HourglassSimpleMediumFillIcon } from "../fill/HourglassSimpleMedium";
import { HourglassSimpleMediumIcon as HourglassSimpleMediumLightIcon } from "../light/HourglassSimpleMedium";
import { HourglassSimpleMediumIcon as HourglassSimpleMediumRegularIcon } from "../regular/HourglassSimpleMedium";
import { HourglassSimpleMediumIcon as HourglassSimpleMediumThinIcon } from "../thin/HourglassSimpleMedium";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HourglassSimpleMediumThinIcon,
	light: HourglassSimpleMediumLightIcon,
	regular: HourglassSimpleMediumRegularIcon,
	bold: HourglassSimpleMediumBoldIcon,
	fill: HourglassSimpleMediumFillIcon,
	duotone: HourglassSimpleMediumDuotoneIcon,
} as const;

export function HourglassSimpleMediumIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HourglassSimpleMediumIcon as HourglassSimpleMedium };
