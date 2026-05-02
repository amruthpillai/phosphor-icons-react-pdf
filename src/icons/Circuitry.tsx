import { CircuitryIcon as CircuitryBoldIcon } from "../bold/Circuitry";
import { CircuitryIcon as CircuitryDuotoneIcon } from "../duotone/Circuitry";
import { CircuitryIcon as CircuitryFillIcon } from "../fill/Circuitry";
import { CircuitryIcon as CircuitryLightIcon } from "../light/Circuitry";
import { CircuitryIcon as CircuitryRegularIcon } from "../regular/Circuitry";
import { CircuitryIcon as CircuitryThinIcon } from "../thin/Circuitry";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CircuitryThinIcon,
	light: CircuitryLightIcon,
	regular: CircuitryRegularIcon,
	bold: CircuitryBoldIcon,
	fill: CircuitryFillIcon,
	duotone: CircuitryDuotoneIcon,
} as const;

export function CircuitryIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CircuitryIcon as Circuitry };
