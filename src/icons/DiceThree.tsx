import { DiceThreeIcon as DiceThreeBoldIcon } from "../bold/DiceThree";
import { DiceThreeIcon as DiceThreeDuotoneIcon } from "../duotone/DiceThree";
import { DiceThreeIcon as DiceThreeFillIcon } from "../fill/DiceThree";
import { DiceThreeIcon as DiceThreeLightIcon } from "../light/DiceThree";
import { DiceThreeIcon as DiceThreeRegularIcon } from "../regular/DiceThree";
import { DiceThreeIcon as DiceThreeThinIcon } from "../thin/DiceThree";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DiceThreeThinIcon,
	light: DiceThreeLightIcon,
	regular: DiceThreeRegularIcon,
	bold: DiceThreeBoldIcon,
	fill: DiceThreeFillIcon,
	duotone: DiceThreeDuotoneIcon,
} as const;

export function DiceThreeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DiceThreeIcon as DiceThree };
