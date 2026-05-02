import { CircleDashedIcon as CircleDashedBoldIcon } from "../bold/CircleDashed";
import { CircleDashedIcon as CircleDashedDuotoneIcon } from "../duotone/CircleDashed";
import { CircleDashedIcon as CircleDashedFillIcon } from "../fill/CircleDashed";
import { CircleDashedIcon as CircleDashedLightIcon } from "../light/CircleDashed";
import { CircleDashedIcon as CircleDashedRegularIcon } from "../regular/CircleDashed";
import { CircleDashedIcon as CircleDashedThinIcon } from "../thin/CircleDashed";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CircleDashedThinIcon,
	light: CircleDashedLightIcon,
	regular: CircleDashedRegularIcon,
	bold: CircleDashedBoldIcon,
	fill: CircleDashedFillIcon,
	duotone: CircleDashedDuotoneIcon,
} as const;

export function CircleDashedIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CircleDashedIcon as CircleDashed };
