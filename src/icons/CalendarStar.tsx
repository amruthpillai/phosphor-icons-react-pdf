import { CalendarStarIcon as CalendarStarBoldIcon } from "../bold/CalendarStar";
import { CalendarStarIcon as CalendarStarDuotoneIcon } from "../duotone/CalendarStar";
import { CalendarStarIcon as CalendarStarFillIcon } from "../fill/CalendarStar";
import { CalendarStarIcon as CalendarStarLightIcon } from "../light/CalendarStar";
import { CalendarStarIcon as CalendarStarRegularIcon } from "../regular/CalendarStar";
import { CalendarStarIcon as CalendarStarThinIcon } from "../thin/CalendarStar";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CalendarStarThinIcon,
	light: CalendarStarLightIcon,
	regular: CalendarStarRegularIcon,
	bold: CalendarStarBoldIcon,
	fill: CalendarStarFillIcon,
	duotone: CalendarStarDuotoneIcon,
} as const;

export function CalendarStarIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CalendarStarIcon as CalendarStar };
