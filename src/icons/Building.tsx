import { BuildingIcon as BuildingBoldIcon } from "../bold/Building";
import { BuildingIcon as BuildingDuotoneIcon } from "../duotone/Building";
import { BuildingIcon as BuildingFillIcon } from "../fill/Building";
import { BuildingIcon as BuildingLightIcon } from "../light/Building";
import { BuildingIcon as BuildingRegularIcon } from "../regular/Building";
import { BuildingIcon as BuildingThinIcon } from "../thin/Building";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BuildingThinIcon,
	light: BuildingLightIcon,
	regular: BuildingRegularIcon,
	bold: BuildingBoldIcon,
	fill: BuildingFillIcon,
	duotone: BuildingDuotoneIcon,
} as const;

export function BuildingIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BuildingIcon as Building };
