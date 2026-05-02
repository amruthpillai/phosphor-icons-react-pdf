import { CalendarIcon as CalendarBoldIcon } from "../bold/Calendar";
import { CalendarIcon as CalendarDuotoneIcon } from "../duotone/Calendar";
import { CalendarIcon as CalendarFillIcon } from "../fill/Calendar";
import { CalendarIcon as CalendarLightIcon } from "../light/Calendar";
import { CalendarIcon as CalendarRegularIcon } from "../regular/Calendar";
import { CalendarIcon as CalendarThinIcon } from "../thin/Calendar";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CalendarThinIcon,
	light: CalendarLightIcon,
	regular: CalendarRegularIcon,
	bold: CalendarBoldIcon,
	fill: CalendarFillIcon,
	duotone: CalendarDuotoneIcon,
} as const;

export function CalendarIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CalendarIcon as Calendar };
