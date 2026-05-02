import { MagnifyingGlassMinusIcon as MagnifyingGlassMinusBoldIcon } from "../bold/MagnifyingGlassMinus";
import { MagnifyingGlassMinusIcon as MagnifyingGlassMinusDuotoneIcon } from "../duotone/MagnifyingGlassMinus";
import { MagnifyingGlassMinusIcon as MagnifyingGlassMinusFillIcon } from "../fill/MagnifyingGlassMinus";
import { MagnifyingGlassMinusIcon as MagnifyingGlassMinusLightIcon } from "../light/MagnifyingGlassMinus";
import { MagnifyingGlassMinusIcon as MagnifyingGlassMinusRegularIcon } from "../regular/MagnifyingGlassMinus";
import { MagnifyingGlassMinusIcon as MagnifyingGlassMinusThinIcon } from "../thin/MagnifyingGlassMinus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MagnifyingGlassMinusThinIcon,
	light: MagnifyingGlassMinusLightIcon,
	regular: MagnifyingGlassMinusRegularIcon,
	bold: MagnifyingGlassMinusBoldIcon,
	fill: MagnifyingGlassMinusFillIcon,
	duotone: MagnifyingGlassMinusDuotoneIcon,
} as const;

export function MagnifyingGlassMinusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MagnifyingGlassMinusIcon as MagnifyingGlassMinus };
