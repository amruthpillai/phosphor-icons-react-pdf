import { CallBellIcon as CallBellBoldIcon } from "../bold/CallBell";
import { CallBellIcon as CallBellDuotoneIcon } from "../duotone/CallBell";
import { CallBellIcon as CallBellFillIcon } from "../fill/CallBell";
import { CallBellIcon as CallBellLightIcon } from "../light/CallBell";
import { CallBellIcon as CallBellRegularIcon } from "../regular/CallBell";
import { CallBellIcon as CallBellThinIcon } from "../thin/CallBell";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CallBellThinIcon,
	light: CallBellLightIcon,
	regular: CallBellRegularIcon,
	bold: CallBellBoldIcon,
	fill: CallBellFillIcon,
	duotone: CallBellDuotoneIcon,
} as const;

export function CallBellIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CallBellIcon as CallBell };
