import { CalendarPlusIcon as CalendarPlusBoldIcon } from "../bold/CalendarPlus";
import { CalendarPlusIcon as CalendarPlusDuotoneIcon } from "../duotone/CalendarPlus";
import { CalendarPlusIcon as CalendarPlusFillIcon } from "../fill/CalendarPlus";
import { CalendarPlusIcon as CalendarPlusLightIcon } from "../light/CalendarPlus";
import { CalendarPlusIcon as CalendarPlusRegularIcon } from "../regular/CalendarPlus";
import { CalendarPlusIcon as CalendarPlusThinIcon } from "../thin/CalendarPlus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CalendarPlusThinIcon,
	light: CalendarPlusLightIcon,
	regular: CalendarPlusRegularIcon,
	bold: CalendarPlusBoldIcon,
	fill: CalendarPlusFillIcon,
	duotone: CalendarPlusDuotoneIcon,
} as const;

export function CalendarPlusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CalendarPlusIcon as CalendarPlus };
