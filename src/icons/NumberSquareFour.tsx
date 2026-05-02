import { NumberSquareFourIcon as NumberSquareFourBoldIcon } from "../bold/NumberSquareFour";
import { NumberSquareFourIcon as NumberSquareFourDuotoneIcon } from "../duotone/NumberSquareFour";
import { NumberSquareFourIcon as NumberSquareFourFillIcon } from "../fill/NumberSquareFour";
import { NumberSquareFourIcon as NumberSquareFourLightIcon } from "../light/NumberSquareFour";
import { NumberSquareFourIcon as NumberSquareFourRegularIcon } from "../regular/NumberSquareFour";
import { NumberSquareFourIcon as NumberSquareFourThinIcon } from "../thin/NumberSquareFour";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberSquareFourThinIcon,
	light: NumberSquareFourLightIcon,
	regular: NumberSquareFourRegularIcon,
	bold: NumberSquareFourBoldIcon,
	fill: NumberSquareFourFillIcon,
	duotone: NumberSquareFourDuotoneIcon,
} as const;

export function NumberSquareFourIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberSquareFourIcon as NumberSquareFour };
