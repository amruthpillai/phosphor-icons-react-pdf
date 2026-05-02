import { TrafficSignIcon as TrafficSignBoldIcon } from "../bold/TrafficSign";
import { TrafficSignIcon as TrafficSignDuotoneIcon } from "../duotone/TrafficSign";
import { TrafficSignIcon as TrafficSignFillIcon } from "../fill/TrafficSign";
import { TrafficSignIcon as TrafficSignLightIcon } from "../light/TrafficSign";
import { TrafficSignIcon as TrafficSignRegularIcon } from "../regular/TrafficSign";
import { TrafficSignIcon as TrafficSignThinIcon } from "../thin/TrafficSign";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TrafficSignThinIcon,
	light: TrafficSignLightIcon,
	regular: TrafficSignRegularIcon,
	bold: TrafficSignBoldIcon,
	fill: TrafficSignFillIcon,
	duotone: TrafficSignDuotoneIcon,
} as const;

export function TrafficSignIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TrafficSignIcon as TrafficSign };
