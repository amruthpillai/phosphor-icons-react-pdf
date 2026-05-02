import { BowlFoodIcon as BowlFoodBoldIcon } from "../bold/BowlFood";
import { BowlFoodIcon as BowlFoodDuotoneIcon } from "../duotone/BowlFood";
import { BowlFoodIcon as BowlFoodFillIcon } from "../fill/BowlFood";
import { BowlFoodIcon as BowlFoodLightIcon } from "../light/BowlFood";
import { BowlFoodIcon as BowlFoodRegularIcon } from "../regular/BowlFood";
import { BowlFoodIcon as BowlFoodThinIcon } from "../thin/BowlFood";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BowlFoodThinIcon,
	light: BowlFoodLightIcon,
	regular: BowlFoodRegularIcon,
	bold: BowlFoodBoldIcon,
	fill: BowlFoodFillIcon,
	duotone: BowlFoodDuotoneIcon,
} as const;

export function BowlFoodIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BowlFoodIcon as BowlFood };
