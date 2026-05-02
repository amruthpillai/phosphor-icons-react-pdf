import { NumberSquareNineIcon as NumberSquareNineBoldIcon } from "../bold/NumberSquareNine";
import { NumberSquareNineIcon as NumberSquareNineDuotoneIcon } from "../duotone/NumberSquareNine";
import { NumberSquareNineIcon as NumberSquareNineFillIcon } from "../fill/NumberSquareNine";
import { NumberSquareNineIcon as NumberSquareNineLightIcon } from "../light/NumberSquareNine";
import { NumberSquareNineIcon as NumberSquareNineRegularIcon } from "../regular/NumberSquareNine";
import { NumberSquareNineIcon as NumberSquareNineThinIcon } from "../thin/NumberSquareNine";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberSquareNineThinIcon,
	light: NumberSquareNineLightIcon,
	regular: NumberSquareNineRegularIcon,
	bold: NumberSquareNineBoldIcon,
	fill: NumberSquareNineFillIcon,
	duotone: NumberSquareNineDuotoneIcon,
} as const;

export function NumberSquareNineIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberSquareNineIcon as NumberSquareNine };
