import { BackpackIcon as BackpackBoldIcon } from "../bold/Backpack";
import { BackpackIcon as BackpackDuotoneIcon } from "../duotone/Backpack";
import { BackpackIcon as BackpackFillIcon } from "../fill/Backpack";
import { BackpackIcon as BackpackLightIcon } from "../light/Backpack";
import { BackpackIcon as BackpackRegularIcon } from "../regular/Backpack";
import { BackpackIcon as BackpackThinIcon } from "../thin/Backpack";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BackpackThinIcon,
	light: BackpackLightIcon,
	regular: BackpackRegularIcon,
	bold: BackpackBoldIcon,
	fill: BackpackFillIcon,
	duotone: BackpackDuotoneIcon,
} as const;

export function BackpackIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BackpackIcon as Backpack };
