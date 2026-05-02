import { NumberCircleFourIcon as NumberCircleFourBoldIcon } from "../bold/NumberCircleFour";
import { NumberCircleFourIcon as NumberCircleFourDuotoneIcon } from "../duotone/NumberCircleFour";
import { NumberCircleFourIcon as NumberCircleFourFillIcon } from "../fill/NumberCircleFour";
import { NumberCircleFourIcon as NumberCircleFourLightIcon } from "../light/NumberCircleFour";
import { NumberCircleFourIcon as NumberCircleFourRegularIcon } from "../regular/NumberCircleFour";
import { NumberCircleFourIcon as NumberCircleFourThinIcon } from "../thin/NumberCircleFour";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberCircleFourThinIcon,
	light: NumberCircleFourLightIcon,
	regular: NumberCircleFourRegularIcon,
	bold: NumberCircleFourBoldIcon,
	fill: NumberCircleFourFillIcon,
	duotone: NumberCircleFourDuotoneIcon,
} as const;

export function NumberCircleFourIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberCircleFourIcon as NumberCircleFour };
