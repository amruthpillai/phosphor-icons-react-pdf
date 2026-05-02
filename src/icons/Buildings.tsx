import { BuildingsIcon as BuildingsBoldIcon } from "../bold/Buildings";
import { BuildingsIcon as BuildingsDuotoneIcon } from "../duotone/Buildings";
import { BuildingsIcon as BuildingsFillIcon } from "../fill/Buildings";
import { BuildingsIcon as BuildingsLightIcon } from "../light/Buildings";
import { BuildingsIcon as BuildingsRegularIcon } from "../regular/Buildings";
import { BuildingsIcon as BuildingsThinIcon } from "../thin/Buildings";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BuildingsThinIcon,
	light: BuildingsLightIcon,
	regular: BuildingsRegularIcon,
	bold: BuildingsBoldIcon,
	fill: BuildingsFillIcon,
	duotone: BuildingsDuotoneIcon,
} as const;

export function BuildingsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BuildingsIcon as Buildings };
