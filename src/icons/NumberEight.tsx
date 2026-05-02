import { NumberEightIcon as NumberEightBoldIcon } from "../bold/NumberEight";
import { NumberEightIcon as NumberEightDuotoneIcon } from "../duotone/NumberEight";
import { NumberEightIcon as NumberEightFillIcon } from "../fill/NumberEight";
import { NumberEightIcon as NumberEightLightIcon } from "../light/NumberEight";
import { NumberEightIcon as NumberEightRegularIcon } from "../regular/NumberEight";
import { NumberEightIcon as NumberEightThinIcon } from "../thin/NumberEight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberEightThinIcon,
	light: NumberEightLightIcon,
	regular: NumberEightRegularIcon,
	bold: NumberEightBoldIcon,
	fill: NumberEightFillIcon,
	duotone: NumberEightDuotoneIcon,
} as const;

export function NumberEightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberEightIcon as NumberEight };
