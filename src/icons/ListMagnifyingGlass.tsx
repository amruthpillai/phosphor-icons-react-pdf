import { ListMagnifyingGlassIcon as ListMagnifyingGlassBoldIcon } from "../bold/ListMagnifyingGlass";
import { ListMagnifyingGlassIcon as ListMagnifyingGlassDuotoneIcon } from "../duotone/ListMagnifyingGlass";
import { ListMagnifyingGlassIcon as ListMagnifyingGlassFillIcon } from "../fill/ListMagnifyingGlass";
import { ListMagnifyingGlassIcon as ListMagnifyingGlassLightIcon } from "../light/ListMagnifyingGlass";
import { ListMagnifyingGlassIcon as ListMagnifyingGlassRegularIcon } from "../regular/ListMagnifyingGlass";
import { ListMagnifyingGlassIcon as ListMagnifyingGlassThinIcon } from "../thin/ListMagnifyingGlass";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ListMagnifyingGlassThinIcon,
	light: ListMagnifyingGlassLightIcon,
	regular: ListMagnifyingGlassRegularIcon,
	bold: ListMagnifyingGlassBoldIcon,
	fill: ListMagnifyingGlassFillIcon,
	duotone: ListMagnifyingGlassDuotoneIcon,
} as const;

export function ListMagnifyingGlassIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ListMagnifyingGlassIcon as ListMagnifyingGlass };
