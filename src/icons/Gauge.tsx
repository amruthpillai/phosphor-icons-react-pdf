import { GaugeIcon as GaugeBoldIcon } from "../bold/Gauge";
import { GaugeIcon as GaugeDuotoneIcon } from "../duotone/Gauge";
import { GaugeIcon as GaugeFillIcon } from "../fill/Gauge";
import { GaugeIcon as GaugeLightIcon } from "../light/Gauge";
import { GaugeIcon as GaugeRegularIcon } from "../regular/Gauge";
import { GaugeIcon as GaugeThinIcon } from "../thin/Gauge";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GaugeThinIcon,
	light: GaugeLightIcon,
	regular: GaugeRegularIcon,
	bold: GaugeBoldIcon,
	fill: GaugeFillIcon,
	duotone: GaugeDuotoneIcon,
} as const;

export function GaugeIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GaugeIcon as Gauge };
