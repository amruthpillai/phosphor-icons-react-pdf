import { BeerBottleIcon as BeerBottleBoldIcon } from "../bold/BeerBottle";
import { BeerBottleIcon as BeerBottleDuotoneIcon } from "../duotone/BeerBottle";
import { BeerBottleIcon as BeerBottleFillIcon } from "../fill/BeerBottle";
import { BeerBottleIcon as BeerBottleLightIcon } from "../light/BeerBottle";
import { BeerBottleIcon as BeerBottleRegularIcon } from "../regular/BeerBottle";
import { BeerBottleIcon as BeerBottleThinIcon } from "../thin/BeerBottle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BeerBottleThinIcon,
	light: BeerBottleLightIcon,
	regular: BeerBottleRegularIcon,
	bold: BeerBottleBoldIcon,
	fill: BeerBottleFillIcon,
	duotone: BeerBottleDuotoneIcon,
} as const;

export function BeerBottleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BeerBottleIcon as BeerBottle };
