import { DiceFiveIcon as DiceFiveBoldIcon } from "../bold/DiceFive";
import { DiceFiveIcon as DiceFiveDuotoneIcon } from "../duotone/DiceFive";
import { DiceFiveIcon as DiceFiveFillIcon } from "../fill/DiceFive";
import { DiceFiveIcon as DiceFiveLightIcon } from "../light/DiceFive";
import { DiceFiveIcon as DiceFiveRegularIcon } from "../regular/DiceFive";
import { DiceFiveIcon as DiceFiveThinIcon } from "../thin/DiceFive";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DiceFiveThinIcon,
	light: DiceFiveLightIcon,
	regular: DiceFiveRegularIcon,
	bold: DiceFiveBoldIcon,
	fill: DiceFiveFillIcon,
	duotone: DiceFiveDuotoneIcon,
} as const;

export function DiceFiveIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DiceFiveIcon as DiceFive };
