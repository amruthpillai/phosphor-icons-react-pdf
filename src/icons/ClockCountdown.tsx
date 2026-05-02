import { ClockCountdownIcon as ClockCountdownBoldIcon } from "../bold/ClockCountdown";
import { ClockCountdownIcon as ClockCountdownDuotoneIcon } from "../duotone/ClockCountdown";
import { ClockCountdownIcon as ClockCountdownFillIcon } from "../fill/ClockCountdown";
import { ClockCountdownIcon as ClockCountdownLightIcon } from "../light/ClockCountdown";
import { ClockCountdownIcon as ClockCountdownRegularIcon } from "../regular/ClockCountdown";
import { ClockCountdownIcon as ClockCountdownThinIcon } from "../thin/ClockCountdown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ClockCountdownThinIcon,
	light: ClockCountdownLightIcon,
	regular: ClockCountdownRegularIcon,
	bold: ClockCountdownBoldIcon,
	fill: ClockCountdownFillIcon,
	duotone: ClockCountdownDuotoneIcon,
} as const;

export function ClockCountdownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ClockCountdownIcon as ClockCountdown };
