import { BracketsRoundIcon as BracketsRoundBoldIcon } from "../bold/BracketsRound";
import { BracketsRoundIcon as BracketsRoundDuotoneIcon } from "../duotone/BracketsRound";
import { BracketsRoundIcon as BracketsRoundFillIcon } from "../fill/BracketsRound";
import { BracketsRoundIcon as BracketsRoundLightIcon } from "../light/BracketsRound";
import { BracketsRoundIcon as BracketsRoundRegularIcon } from "../regular/BracketsRound";
import { BracketsRoundIcon as BracketsRoundThinIcon } from "../thin/BracketsRound";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BracketsRoundThinIcon,
	light: BracketsRoundLightIcon,
	regular: BracketsRoundRegularIcon,
	bold: BracketsRoundBoldIcon,
	fill: BracketsRoundFillIcon,
	duotone: BracketsRoundDuotoneIcon,
} as const;

export function BracketsRoundIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BracketsRoundIcon as BracketsRound };
