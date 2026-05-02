import { DiceFourIcon as DiceFourBoldIcon } from "../bold/DiceFour";
import { DiceFourIcon as DiceFourDuotoneIcon } from "../duotone/DiceFour";
import { DiceFourIcon as DiceFourFillIcon } from "../fill/DiceFour";
import { DiceFourIcon as DiceFourLightIcon } from "../light/DiceFour";
import { DiceFourIcon as DiceFourRegularIcon } from "../regular/DiceFour";
import { DiceFourIcon as DiceFourThinIcon } from "../thin/DiceFour";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DiceFourThinIcon,
	light: DiceFourLightIcon,
	regular: DiceFourRegularIcon,
	bold: DiceFourBoldIcon,
	fill: DiceFourFillIcon,
	duotone: DiceFourDuotoneIcon,
} as const;

export function DiceFourIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DiceFourIcon as DiceFour };
