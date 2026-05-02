import { NumberCircleOneIcon as NumberCircleOneBoldIcon } from "../bold/NumberCircleOne";
import { NumberCircleOneIcon as NumberCircleOneDuotoneIcon } from "../duotone/NumberCircleOne";
import { NumberCircleOneIcon as NumberCircleOneFillIcon } from "../fill/NumberCircleOne";
import { NumberCircleOneIcon as NumberCircleOneLightIcon } from "../light/NumberCircleOne";
import { NumberCircleOneIcon as NumberCircleOneRegularIcon } from "../regular/NumberCircleOne";
import { NumberCircleOneIcon as NumberCircleOneThinIcon } from "../thin/NumberCircleOne";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberCircleOneThinIcon,
	light: NumberCircleOneLightIcon,
	regular: NumberCircleOneRegularIcon,
	bold: NumberCircleOneBoldIcon,
	fill: NumberCircleOneFillIcon,
	duotone: NumberCircleOneDuotoneIcon,
} as const;

export function NumberCircleOneIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberCircleOneIcon as NumberCircleOne };
