import { HoodieIcon as HoodieBoldIcon } from "../bold/Hoodie";
import { HoodieIcon as HoodieDuotoneIcon } from "../duotone/Hoodie";
import { HoodieIcon as HoodieFillIcon } from "../fill/Hoodie";
import { HoodieIcon as HoodieLightIcon } from "../light/Hoodie";
import { HoodieIcon as HoodieRegularIcon } from "../regular/Hoodie";
import { HoodieIcon as HoodieThinIcon } from "../thin/Hoodie";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HoodieThinIcon,
	light: HoodieLightIcon,
	regular: HoodieRegularIcon,
	bold: HoodieBoldIcon,
	fill: HoodieFillIcon,
	duotone: HoodieDuotoneIcon,
} as const;

export function HoodieIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HoodieIcon as Hoodie };
