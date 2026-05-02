import { CalendarBlankIcon as CalendarBlankBoldIcon } from "../bold/CalendarBlank";
import { CalendarBlankIcon as CalendarBlankDuotoneIcon } from "../duotone/CalendarBlank";
import { CalendarBlankIcon as CalendarBlankFillIcon } from "../fill/CalendarBlank";
import { CalendarBlankIcon as CalendarBlankLightIcon } from "../light/CalendarBlank";
import { CalendarBlankIcon as CalendarBlankRegularIcon } from "../regular/CalendarBlank";
import { CalendarBlankIcon as CalendarBlankThinIcon } from "../thin/CalendarBlank";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CalendarBlankThinIcon,
	light: CalendarBlankLightIcon,
	regular: CalendarBlankRegularIcon,
	bold: CalendarBlankBoldIcon,
	fill: CalendarBlankFillIcon,
	duotone: CalendarBlankDuotoneIcon,
} as const;

export function CalendarBlankIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CalendarBlankIcon as CalendarBlank };
