import { TriangleDashedIcon as TriangleDashedBoldIcon } from "../bold/TriangleDashed";
import { TriangleDashedIcon as TriangleDashedDuotoneIcon } from "../duotone/TriangleDashed";
import { TriangleDashedIcon as TriangleDashedFillIcon } from "../fill/TriangleDashed";
import { TriangleDashedIcon as TriangleDashedLightIcon } from "../light/TriangleDashed";
import { TriangleDashedIcon as TriangleDashedRegularIcon } from "../regular/TriangleDashed";
import { TriangleDashedIcon as TriangleDashedThinIcon } from "../thin/TriangleDashed";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TriangleDashedThinIcon,
	light: TriangleDashedLightIcon,
	regular: TriangleDashedRegularIcon,
	bold: TriangleDashedBoldIcon,
	fill: TriangleDashedFillIcon,
	duotone: TriangleDashedDuotoneIcon,
} as const;

export function TriangleDashedIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TriangleDashedIcon as TriangleDashed };
