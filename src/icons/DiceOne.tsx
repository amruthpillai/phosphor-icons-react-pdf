import { DiceOneIcon as DiceOneBoldIcon } from "../bold/DiceOne";
import { DiceOneIcon as DiceOneDuotoneIcon } from "../duotone/DiceOne";
import { DiceOneIcon as DiceOneFillIcon } from "../fill/DiceOne";
import { DiceOneIcon as DiceOneLightIcon } from "../light/DiceOne";
import { DiceOneIcon as DiceOneRegularIcon } from "../regular/DiceOne";
import { DiceOneIcon as DiceOneThinIcon } from "../thin/DiceOne";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DiceOneThinIcon,
	light: DiceOneLightIcon,
	regular: DiceOneRegularIcon,
	bold: DiceOneBoldIcon,
	fill: DiceOneFillIcon,
	duotone: DiceOneDuotoneIcon,
} as const;

export function DiceOneIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DiceOneIcon as DiceOne };
