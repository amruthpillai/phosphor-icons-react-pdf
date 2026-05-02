import { SubtractIcon as SubtractBoldIcon } from "../bold/Subtract";
import { SubtractIcon as SubtractDuotoneIcon } from "../duotone/Subtract";
import { SubtractIcon as SubtractFillIcon } from "../fill/Subtract";
import { SubtractIcon as SubtractLightIcon } from "../light/Subtract";
import { SubtractIcon as SubtractRegularIcon } from "../regular/Subtract";
import { SubtractIcon as SubtractThinIcon } from "../thin/Subtract";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SubtractThinIcon,
	light: SubtractLightIcon,
	regular: SubtractRegularIcon,
	bold: SubtractBoldIcon,
	fill: SubtractFillIcon,
	duotone: SubtractDuotoneIcon,
} as const;

export function SubtractIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SubtractIcon as Subtract };
