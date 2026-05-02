import { CalendarMinusIcon as CalendarMinusBoldIcon } from "../bold/CalendarMinus";
import { CalendarMinusIcon as CalendarMinusDuotoneIcon } from "../duotone/CalendarMinus";
import { CalendarMinusIcon as CalendarMinusFillIcon } from "../fill/CalendarMinus";
import { CalendarMinusIcon as CalendarMinusLightIcon } from "../light/CalendarMinus";
import { CalendarMinusIcon as CalendarMinusRegularIcon } from "../regular/CalendarMinus";
import { CalendarMinusIcon as CalendarMinusThinIcon } from "../thin/CalendarMinus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CalendarMinusThinIcon,
	light: CalendarMinusLightIcon,
	regular: CalendarMinusRegularIcon,
	bold: CalendarMinusBoldIcon,
	fill: CalendarMinusFillIcon,
	duotone: CalendarMinusDuotoneIcon,
} as const;

export function CalendarMinusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CalendarMinusIcon as CalendarMinus };
