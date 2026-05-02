import { CalendarXIcon as CalendarXBoldIcon } from "../bold/CalendarX";
import { CalendarXIcon as CalendarXDuotoneIcon } from "../duotone/CalendarX";
import { CalendarXIcon as CalendarXFillIcon } from "../fill/CalendarX";
import { CalendarXIcon as CalendarXLightIcon } from "../light/CalendarX";
import { CalendarXIcon as CalendarXRegularIcon } from "../regular/CalendarX";
import { CalendarXIcon as CalendarXThinIcon } from "../thin/CalendarX";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CalendarXThinIcon,
	light: CalendarXLightIcon,
	regular: CalendarXRegularIcon,
	bold: CalendarXBoldIcon,
	fill: CalendarXFillIcon,
	duotone: CalendarXDuotoneIcon,
} as const;

export function CalendarXIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CalendarXIcon as CalendarX };
