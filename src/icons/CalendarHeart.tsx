import { CalendarHeartIcon as CalendarHeartBoldIcon } from "../bold/CalendarHeart";
import { CalendarHeartIcon as CalendarHeartDuotoneIcon } from "../duotone/CalendarHeart";
import { CalendarHeartIcon as CalendarHeartFillIcon } from "../fill/CalendarHeart";
import { CalendarHeartIcon as CalendarHeartLightIcon } from "../light/CalendarHeart";
import { CalendarHeartIcon as CalendarHeartRegularIcon } from "../regular/CalendarHeart";
import { CalendarHeartIcon as CalendarHeartThinIcon } from "../thin/CalendarHeart";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CalendarHeartThinIcon,
	light: CalendarHeartLightIcon,
	regular: CalendarHeartRegularIcon,
	bold: CalendarHeartBoldIcon,
	fill: CalendarHeartFillIcon,
	duotone: CalendarHeartDuotoneIcon,
} as const;

export function CalendarHeartIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CalendarHeartIcon as CalendarHeart };
