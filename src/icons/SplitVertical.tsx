import { SplitVerticalIcon as SplitVerticalBoldIcon } from "../bold/SplitVertical";
import { SplitVerticalIcon as SplitVerticalDuotoneIcon } from "../duotone/SplitVertical";
import { SplitVerticalIcon as SplitVerticalFillIcon } from "../fill/SplitVertical";
import { SplitVerticalIcon as SplitVerticalLightIcon } from "../light/SplitVertical";
import { SplitVerticalIcon as SplitVerticalRegularIcon } from "../regular/SplitVertical";
import { SplitVerticalIcon as SplitVerticalThinIcon } from "../thin/SplitVertical";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SplitVerticalThinIcon,
	light: SplitVerticalLightIcon,
	regular: SplitVerticalRegularIcon,
	bold: SplitVerticalBoldIcon,
	fill: SplitVerticalFillIcon,
	duotone: SplitVerticalDuotoneIcon,
} as const;

export function SplitVerticalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SplitVerticalIcon as SplitVertical };
