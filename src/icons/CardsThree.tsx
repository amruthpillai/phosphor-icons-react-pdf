import { CardsThreeIcon as CardsThreeBoldIcon } from "../bold/CardsThree";
import { CardsThreeIcon as CardsThreeDuotoneIcon } from "../duotone/CardsThree";
import { CardsThreeIcon as CardsThreeFillIcon } from "../fill/CardsThree";
import { CardsThreeIcon as CardsThreeLightIcon } from "../light/CardsThree";
import { CardsThreeIcon as CardsThreeRegularIcon } from "../regular/CardsThree";
import { CardsThreeIcon as CardsThreeThinIcon } from "../thin/CardsThree";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CardsThreeThinIcon,
	light: CardsThreeLightIcon,
	regular: CardsThreeRegularIcon,
	bold: CardsThreeBoldIcon,
	fill: CardsThreeFillIcon,
	duotone: CardsThreeDuotoneIcon,
} as const;

export function CardsThreeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CardsThreeIcon as CardsThree };
