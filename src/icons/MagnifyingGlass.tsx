import { MagnifyingGlassIcon as MagnifyingGlassBoldIcon } from "../bold/MagnifyingGlass";
import { MagnifyingGlassIcon as MagnifyingGlassDuotoneIcon } from "../duotone/MagnifyingGlass";
import { MagnifyingGlassIcon as MagnifyingGlassFillIcon } from "../fill/MagnifyingGlass";
import { MagnifyingGlassIcon as MagnifyingGlassLightIcon } from "../light/MagnifyingGlass";
import { MagnifyingGlassIcon as MagnifyingGlassRegularIcon } from "../regular/MagnifyingGlass";
import { MagnifyingGlassIcon as MagnifyingGlassThinIcon } from "../thin/MagnifyingGlass";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MagnifyingGlassThinIcon,
	light: MagnifyingGlassLightIcon,
	regular: MagnifyingGlassRegularIcon,
	bold: MagnifyingGlassBoldIcon,
	fill: MagnifyingGlassFillIcon,
	duotone: MagnifyingGlassDuotoneIcon,
} as const;

export function MagnifyingGlassIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MagnifyingGlassIcon as MagnifyingGlass };
