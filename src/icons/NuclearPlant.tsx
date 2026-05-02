import { NuclearPlantIcon as NuclearPlantBoldIcon } from "../bold/NuclearPlant";
import { NuclearPlantIcon as NuclearPlantDuotoneIcon } from "../duotone/NuclearPlant";
import { NuclearPlantIcon as NuclearPlantFillIcon } from "../fill/NuclearPlant";
import { NuclearPlantIcon as NuclearPlantLightIcon } from "../light/NuclearPlant";
import { NuclearPlantIcon as NuclearPlantRegularIcon } from "../regular/NuclearPlant";
import { NuclearPlantIcon as NuclearPlantThinIcon } from "../thin/NuclearPlant";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NuclearPlantThinIcon,
	light: NuclearPlantLightIcon,
	regular: NuclearPlantRegularIcon,
	bold: NuclearPlantBoldIcon,
	fill: NuclearPlantFillIcon,
	duotone: NuclearPlantDuotoneIcon,
} as const;

export function NuclearPlantIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NuclearPlantIcon as NuclearPlant };
