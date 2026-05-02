import { ClockAfternoonIcon as ClockAfternoonBoldIcon } from "../bold/ClockAfternoon";
import { ClockAfternoonIcon as ClockAfternoonDuotoneIcon } from "../duotone/ClockAfternoon";
import { ClockAfternoonIcon as ClockAfternoonFillIcon } from "../fill/ClockAfternoon";
import { ClockAfternoonIcon as ClockAfternoonLightIcon } from "../light/ClockAfternoon";
import { ClockAfternoonIcon as ClockAfternoonRegularIcon } from "../regular/ClockAfternoon";
import { ClockAfternoonIcon as ClockAfternoonThinIcon } from "../thin/ClockAfternoon";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ClockAfternoonThinIcon,
	light: ClockAfternoonLightIcon,
	regular: ClockAfternoonRegularIcon,
	bold: ClockAfternoonBoldIcon,
	fill: ClockAfternoonFillIcon,
	duotone: ClockAfternoonDuotoneIcon,
} as const;

export function ClockAfternoonIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ClockAfternoonIcon as ClockAfternoon };
