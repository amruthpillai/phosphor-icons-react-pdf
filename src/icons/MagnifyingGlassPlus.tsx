import { MagnifyingGlassPlusIcon as MagnifyingGlassPlusBoldIcon } from "../bold/MagnifyingGlassPlus";
import { MagnifyingGlassPlusIcon as MagnifyingGlassPlusDuotoneIcon } from "../duotone/MagnifyingGlassPlus";
import { MagnifyingGlassPlusIcon as MagnifyingGlassPlusFillIcon } from "../fill/MagnifyingGlassPlus";
import { MagnifyingGlassPlusIcon as MagnifyingGlassPlusLightIcon } from "../light/MagnifyingGlassPlus";
import { MagnifyingGlassPlusIcon as MagnifyingGlassPlusRegularIcon } from "../regular/MagnifyingGlassPlus";
import { MagnifyingGlassPlusIcon as MagnifyingGlassPlusThinIcon } from "../thin/MagnifyingGlassPlus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MagnifyingGlassPlusThinIcon,
	light: MagnifyingGlassPlusLightIcon,
	regular: MagnifyingGlassPlusRegularIcon,
	bold: MagnifyingGlassPlusBoldIcon,
	fill: MagnifyingGlassPlusFillIcon,
	duotone: MagnifyingGlassPlusDuotoneIcon,
} as const;

export function MagnifyingGlassPlusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MagnifyingGlassPlusIcon as MagnifyingGlassPlus };
