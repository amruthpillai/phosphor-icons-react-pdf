import { NumberNineIcon as NumberNineBoldIcon } from "../bold/NumberNine";
import { NumberNineIcon as NumberNineDuotoneIcon } from "../duotone/NumberNine";
import { NumberNineIcon as NumberNineFillIcon } from "../fill/NumberNine";
import { NumberNineIcon as NumberNineLightIcon } from "../light/NumberNine";
import { NumberNineIcon as NumberNineRegularIcon } from "../regular/NumberNine";
import { NumberNineIcon as NumberNineThinIcon } from "../thin/NumberNine";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberNineThinIcon,
	light: NumberNineLightIcon,
	regular: NumberNineRegularIcon,
	bold: NumberNineBoldIcon,
	fill: NumberNineFillIcon,
	duotone: NumberNineDuotoneIcon,
} as const;

export function NumberNineIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberNineIcon as NumberNine };
