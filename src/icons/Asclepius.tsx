import { AsclepiusIcon as AsclepiusBoldIcon } from "../bold/Asclepius";
import { AsclepiusIcon as AsclepiusDuotoneIcon } from "../duotone/Asclepius";
import { AsclepiusIcon as AsclepiusFillIcon } from "../fill/Asclepius";
import { AsclepiusIcon as AsclepiusLightIcon } from "../light/Asclepius";
import { AsclepiusIcon as AsclepiusRegularIcon } from "../regular/Asclepius";
import { AsclepiusIcon as AsclepiusThinIcon } from "../thin/Asclepius";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AsclepiusThinIcon,
	light: AsclepiusLightIcon,
	regular: AsclepiusRegularIcon,
	bold: AsclepiusBoldIcon,
	fill: AsclepiusFillIcon,
	duotone: AsclepiusDuotoneIcon,
} as const;

export function AsclepiusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AsclepiusIcon as Asclepius };
