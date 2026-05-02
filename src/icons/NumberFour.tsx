import { NumberFourIcon as NumberFourBoldIcon } from "../bold/NumberFour";
import { NumberFourIcon as NumberFourDuotoneIcon } from "../duotone/NumberFour";
import { NumberFourIcon as NumberFourFillIcon } from "../fill/NumberFour";
import { NumberFourIcon as NumberFourLightIcon } from "../light/NumberFour";
import { NumberFourIcon as NumberFourRegularIcon } from "../regular/NumberFour";
import { NumberFourIcon as NumberFourThinIcon } from "../thin/NumberFour";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberFourThinIcon,
	light: NumberFourLightIcon,
	regular: NumberFourRegularIcon,
	bold: NumberFourBoldIcon,
	fill: NumberFourFillIcon,
	duotone: NumberFourDuotoneIcon,
} as const;

export function NumberFourIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberFourIcon as NumberFour };
