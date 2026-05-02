import { RoadHorizonIcon as RoadHorizonBoldIcon } from "../bold/RoadHorizon";
import { RoadHorizonIcon as RoadHorizonDuotoneIcon } from "../duotone/RoadHorizon";
import { RoadHorizonIcon as RoadHorizonFillIcon } from "../fill/RoadHorizon";
import { RoadHorizonIcon as RoadHorizonLightIcon } from "../light/RoadHorizon";
import { RoadHorizonIcon as RoadHorizonRegularIcon } from "../regular/RoadHorizon";
import { RoadHorizonIcon as RoadHorizonThinIcon } from "../thin/RoadHorizon";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RoadHorizonThinIcon,
	light: RoadHorizonLightIcon,
	regular: RoadHorizonRegularIcon,
	bold: RoadHorizonBoldIcon,
	fill: RoadHorizonFillIcon,
	duotone: RoadHorizonDuotoneIcon,
} as const;

export function RoadHorizonIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RoadHorizonIcon as RoadHorizon };
