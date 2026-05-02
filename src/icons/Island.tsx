import { IslandIcon as IslandBoldIcon } from "../bold/Island";
import { IslandIcon as IslandDuotoneIcon } from "../duotone/Island";
import { IslandIcon as IslandFillIcon } from "../fill/Island";
import { IslandIcon as IslandLightIcon } from "../light/Island";
import { IslandIcon as IslandRegularIcon } from "../regular/Island";
import { IslandIcon as IslandThinIcon } from "../thin/Island";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: IslandThinIcon,
	light: IslandLightIcon,
	regular: IslandRegularIcon,
	bold: IslandBoldIcon,
	fill: IslandFillIcon,
	duotone: IslandDuotoneIcon,
} as const;

export function IslandIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { IslandIcon as Island };
