import { NumberOneIcon as NumberOneBoldIcon } from "../bold/NumberOne";
import { NumberOneIcon as NumberOneDuotoneIcon } from "../duotone/NumberOne";
import { NumberOneIcon as NumberOneFillIcon } from "../fill/NumberOne";
import { NumberOneIcon as NumberOneLightIcon } from "../light/NumberOne";
import { NumberOneIcon as NumberOneRegularIcon } from "../regular/NumberOne";
import { NumberOneIcon as NumberOneThinIcon } from "../thin/NumberOne";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumberOneThinIcon,
	light: NumberOneLightIcon,
	regular: NumberOneRegularIcon,
	bold: NumberOneBoldIcon,
	fill: NumberOneFillIcon,
	duotone: NumberOneDuotoneIcon,
} as const;

export function NumberOneIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumberOneIcon as NumberOne };
