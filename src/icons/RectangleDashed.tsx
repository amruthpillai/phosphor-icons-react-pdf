import { RectangleDashedIcon as RectangleDashedBoldIcon } from "../bold/RectangleDashed";
import { RectangleDashedIcon as RectangleDashedDuotoneIcon } from "../duotone/RectangleDashed";
import { RectangleDashedIcon as RectangleDashedFillIcon } from "../fill/RectangleDashed";
import { RectangleDashedIcon as RectangleDashedLightIcon } from "../light/RectangleDashed";
import { RectangleDashedIcon as RectangleDashedRegularIcon } from "../regular/RectangleDashed";
import { RectangleDashedIcon as RectangleDashedThinIcon } from "../thin/RectangleDashed";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RectangleDashedThinIcon,
	light: RectangleDashedLightIcon,
	regular: RectangleDashedRegularIcon,
	bold: RectangleDashedBoldIcon,
	fill: RectangleDashedFillIcon,
	duotone: RectangleDashedDuotoneIcon,
} as const;

export function RectangleDashedIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RectangleDashedIcon as RectangleDashed };
