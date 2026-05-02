import { TrafficConeIcon as TrafficConeBoldIcon } from "../bold/TrafficCone";
import { TrafficConeIcon as TrafficConeDuotoneIcon } from "../duotone/TrafficCone";
import { TrafficConeIcon as TrafficConeFillIcon } from "../fill/TrafficCone";
import { TrafficConeIcon as TrafficConeLightIcon } from "../light/TrafficCone";
import { TrafficConeIcon as TrafficConeRegularIcon } from "../regular/TrafficCone";
import { TrafficConeIcon as TrafficConeThinIcon } from "../thin/TrafficCone";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TrafficConeThinIcon,
	light: TrafficConeLightIcon,
	regular: TrafficConeRegularIcon,
	bold: TrafficConeBoldIcon,
	fill: TrafficConeFillIcon,
	duotone: TrafficConeDuotoneIcon,
} as const;

export function TrafficConeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TrafficConeIcon as TrafficCone };
