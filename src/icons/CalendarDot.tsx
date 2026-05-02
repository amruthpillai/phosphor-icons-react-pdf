import { CalendarDotIcon as CalendarDotBoldIcon } from "../bold/CalendarDot";
import { CalendarDotIcon as CalendarDotDuotoneIcon } from "../duotone/CalendarDot";
import { CalendarDotIcon as CalendarDotFillIcon } from "../fill/CalendarDot";
import { CalendarDotIcon as CalendarDotLightIcon } from "../light/CalendarDot";
import { CalendarDotIcon as CalendarDotRegularIcon } from "../regular/CalendarDot";
import { CalendarDotIcon as CalendarDotThinIcon } from "../thin/CalendarDot";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CalendarDotThinIcon,
	light: CalendarDotLightIcon,
	regular: CalendarDotRegularIcon,
	bold: CalendarDotBoldIcon,
	fill: CalendarDotFillIcon,
	duotone: CalendarDotDuotoneIcon,
} as const;

export function CalendarDotIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CalendarDotIcon as CalendarDot };
