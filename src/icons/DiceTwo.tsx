import { DiceTwoIcon as DiceTwoBoldIcon } from "../bold/DiceTwo";
import { DiceTwoIcon as DiceTwoDuotoneIcon } from "../duotone/DiceTwo";
import { DiceTwoIcon as DiceTwoFillIcon } from "../fill/DiceTwo";
import { DiceTwoIcon as DiceTwoLightIcon } from "../light/DiceTwo";
import { DiceTwoIcon as DiceTwoRegularIcon } from "../regular/DiceTwo";
import { DiceTwoIcon as DiceTwoThinIcon } from "../thin/DiceTwo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DiceTwoThinIcon,
	light: DiceTwoLightIcon,
	regular: DiceTwoRegularIcon,
	bold: DiceTwoBoldIcon,
	fill: DiceTwoFillIcon,
	duotone: DiceTwoDuotoneIcon,
} as const;

export function DiceTwoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DiceTwoIcon as DiceTwo };
