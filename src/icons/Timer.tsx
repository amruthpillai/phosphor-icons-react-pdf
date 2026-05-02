import { TimerIcon as TimerBoldIcon } from "../bold/Timer";
import { TimerIcon as TimerDuotoneIcon } from "../duotone/Timer";
import { TimerIcon as TimerFillIcon } from "../fill/Timer";
import { TimerIcon as TimerLightIcon } from "../light/Timer";
import { TimerIcon as TimerRegularIcon } from "../regular/Timer";
import { TimerIcon as TimerThinIcon } from "../thin/Timer";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TimerThinIcon,
	light: TimerLightIcon,
	regular: TimerRegularIcon,
	bold: TimerBoldIcon,
	fill: TimerFillIcon,
	duotone: TimerDuotoneIcon,
} as const;

export function TimerIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TimerIcon as Timer };
