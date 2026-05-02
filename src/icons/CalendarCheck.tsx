import { CalendarCheckIcon as CalendarCheckBoldIcon } from "../bold/CalendarCheck";
import { CalendarCheckIcon as CalendarCheckDuotoneIcon } from "../duotone/CalendarCheck";
import { CalendarCheckIcon as CalendarCheckFillIcon } from "../fill/CalendarCheck";
import { CalendarCheckIcon as CalendarCheckLightIcon } from "../light/CalendarCheck";
import { CalendarCheckIcon as CalendarCheckRegularIcon } from "../regular/CalendarCheck";
import { CalendarCheckIcon as CalendarCheckThinIcon } from "../thin/CalendarCheck";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CalendarCheckThinIcon,
	light: CalendarCheckLightIcon,
	regular: CalendarCheckRegularIcon,
	bold: CalendarCheckBoldIcon,
	fill: CalendarCheckFillIcon,
	duotone: CalendarCheckDuotoneIcon,
} as const;

export function CalendarCheckIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CalendarCheckIcon as CalendarCheck };
