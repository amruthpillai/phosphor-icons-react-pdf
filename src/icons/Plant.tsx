import { PlantIcon as PlantBoldIcon } from "../bold/Plant";
import { PlantIcon as PlantDuotoneIcon } from "../duotone/Plant";
import { PlantIcon as PlantFillIcon } from "../fill/Plant";
import { PlantIcon as PlantLightIcon } from "../light/Plant";
import { PlantIcon as PlantRegularIcon } from "../regular/Plant";
import { PlantIcon as PlantThinIcon } from "../thin/Plant";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PlantThinIcon,
	light: PlantLightIcon,
	regular: PlantRegularIcon,
	bold: PlantBoldIcon,
	fill: PlantFillIcon,
	duotone: PlantDuotoneIcon,
} as const;

export function PlantIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PlantIcon as Plant };
