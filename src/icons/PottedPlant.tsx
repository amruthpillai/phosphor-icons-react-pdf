import { PottedPlantIcon as PottedPlantBoldIcon } from "../bold/PottedPlant";
import { PottedPlantIcon as PottedPlantDuotoneIcon } from "../duotone/PottedPlant";
import { PottedPlantIcon as PottedPlantFillIcon } from "../fill/PottedPlant";
import { PottedPlantIcon as PottedPlantLightIcon } from "../light/PottedPlant";
import { PottedPlantIcon as PottedPlantRegularIcon } from "../regular/PottedPlant";
import { PottedPlantIcon as PottedPlantThinIcon } from "../thin/PottedPlant";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PottedPlantThinIcon,
	light: PottedPlantLightIcon,
	regular: PottedPlantRegularIcon,
	bold: PottedPlantBoldIcon,
	fill: PottedPlantFillIcon,
	duotone: PottedPlantDuotoneIcon,
} as const;

export function PottedPlantIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PottedPlantIcon as PottedPlant };
