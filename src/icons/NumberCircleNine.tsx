import { NumberCircleNineIcon as NumberCircleNineBoldIcon } from "../bold/NumberCircleNine";
import { NumberCircleNineIcon as NumberCircleNineDuotoneIcon } from "../duotone/NumberCircleNine";
import { NumberCircleNineIcon as NumberCircleNineFillIcon } from "../fill/NumberCircleNine";
import { NumberCircleNineIcon as NumberCircleNineLightIcon } from "../light/NumberCircleNine";
import { NumberCircleNineIcon as NumberCircleNineRegularIcon } from "../regular/NumberCircleNine";
import { NumberCircleNineIcon as NumberCircleNineThinIcon } from "../thin/NumberCircleNine";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberCircleNineThinIcon,
	light: NumberCircleNineLightIcon,
	regular: NumberCircleNineRegularIcon,
	bold: NumberCircleNineBoldIcon,
	fill: NumberCircleNineFillIcon,
	duotone: NumberCircleNineDuotoneIcon,
} as const;

export function NumberCircleNineIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberCircleNineIcon as NumberCircleNine };
