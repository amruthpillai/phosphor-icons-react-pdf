import { PulseIcon as PulseBoldIcon } from "../bold/Pulse";
import { PulseIcon as PulseDuotoneIcon } from "../duotone/Pulse";
import { PulseIcon as PulseFillIcon } from "../fill/Pulse";
import { PulseIcon as PulseLightIcon } from "../light/Pulse";
import { PulseIcon as PulseRegularIcon } from "../regular/Pulse";
import { PulseIcon as PulseThinIcon } from "../thin/Pulse";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PulseThinIcon,
	light: PulseLightIcon,
	regular: PulseRegularIcon,
	bold: PulseBoldIcon,
	fill: PulseFillIcon,
	duotone: PulseDuotoneIcon,
} as const;

export function PulseIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PulseIcon as Pulse };
