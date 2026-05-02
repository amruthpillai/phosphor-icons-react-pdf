import { HourglassMediumIcon as HourglassMediumBoldIcon } from "../bold/HourglassMedium";
import { HourglassMediumIcon as HourglassMediumDuotoneIcon } from "../duotone/HourglassMedium";
import { HourglassMediumIcon as HourglassMediumFillIcon } from "../fill/HourglassMedium";
import { HourglassMediumIcon as HourglassMediumLightIcon } from "../light/HourglassMedium";
import { HourglassMediumIcon as HourglassMediumRegularIcon } from "../regular/HourglassMedium";
import { HourglassMediumIcon as HourglassMediumThinIcon } from "../thin/HourglassMedium";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HourglassMediumThinIcon,
	light: HourglassMediumLightIcon,
	regular: HourglassMediumRegularIcon,
	bold: HourglassMediumBoldIcon,
	fill: HourglassMediumFillIcon,
	duotone: HourglassMediumDuotoneIcon,
} as const;

export function HourglassMediumIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HourglassMediumIcon as HourglassMedium };
