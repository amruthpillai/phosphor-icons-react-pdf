import { CalendarDotsIcon as CalendarDotsBoldIcon } from "../bold/CalendarDots";
import { CalendarDotsIcon as CalendarDotsDuotoneIcon } from "../duotone/CalendarDots";
import { CalendarDotsIcon as CalendarDotsFillIcon } from "../fill/CalendarDots";
import { CalendarDotsIcon as CalendarDotsLightIcon } from "../light/CalendarDots";
import { CalendarDotsIcon as CalendarDotsRegularIcon } from "../regular/CalendarDots";
import { CalendarDotsIcon as CalendarDotsThinIcon } from "../thin/CalendarDots";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CalendarDotsThinIcon,
	light: CalendarDotsLightIcon,
	regular: CalendarDotsRegularIcon,
	bold: CalendarDotsBoldIcon,
	fill: CalendarDotsFillIcon,
	duotone: CalendarDotsDuotoneIcon,
} as const;

export function CalendarDotsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CalendarDotsIcon as CalendarDots };
