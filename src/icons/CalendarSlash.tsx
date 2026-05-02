import { CalendarSlashIcon as CalendarSlashBoldIcon } from "../bold/CalendarSlash";
import { CalendarSlashIcon as CalendarSlashDuotoneIcon } from "../duotone/CalendarSlash";
import { CalendarSlashIcon as CalendarSlashFillIcon } from "../fill/CalendarSlash";
import { CalendarSlashIcon as CalendarSlashLightIcon } from "../light/CalendarSlash";
import { CalendarSlashIcon as CalendarSlashRegularIcon } from "../regular/CalendarSlash";
import { CalendarSlashIcon as CalendarSlashThinIcon } from "../thin/CalendarSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CalendarSlashThinIcon,
	light: CalendarSlashLightIcon,
	regular: CalendarSlashRegularIcon,
	bold: CalendarSlashBoldIcon,
	fill: CalendarSlashFillIcon,
	duotone: CalendarSlashDuotoneIcon,
} as const;

export function CalendarSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CalendarSlashIcon as CalendarSlash };
