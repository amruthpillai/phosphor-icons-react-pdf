import { HeadCircuitIcon as HeadCircuitBoldIcon } from "../bold/HeadCircuit";
import { HeadCircuitIcon as HeadCircuitDuotoneIcon } from "../duotone/HeadCircuit";
import { HeadCircuitIcon as HeadCircuitFillIcon } from "../fill/HeadCircuit";
import { HeadCircuitIcon as HeadCircuitLightIcon } from "../light/HeadCircuit";
import { HeadCircuitIcon as HeadCircuitRegularIcon } from "../regular/HeadCircuit";
import { HeadCircuitIcon as HeadCircuitThinIcon } from "../thin/HeadCircuit";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HeadCircuitThinIcon,
	light: HeadCircuitLightIcon,
	regular: HeadCircuitRegularIcon,
	bold: HeadCircuitBoldIcon,
	fill: HeadCircuitFillIcon,
	duotone: HeadCircuitDuotoneIcon,
} as const;

export function HeadCircuitIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HeadCircuitIcon as HeadCircuit };
