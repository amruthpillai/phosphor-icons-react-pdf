import { SquareSplitVerticalIcon as SquareSplitVerticalBoldIcon } from "../bold/SquareSplitVertical";
import { SquareSplitVerticalIcon as SquareSplitVerticalDuotoneIcon } from "../duotone/SquareSplitVertical";
import { SquareSplitVerticalIcon as SquareSplitVerticalFillIcon } from "../fill/SquareSplitVertical";
import { SquareSplitVerticalIcon as SquareSplitVerticalLightIcon } from "../light/SquareSplitVertical";
import { SquareSplitVerticalIcon as SquareSplitVerticalRegularIcon } from "../regular/SquareSplitVertical";
import { SquareSplitVerticalIcon as SquareSplitVerticalThinIcon } from "../thin/SquareSplitVertical";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SquareSplitVerticalThinIcon,
	light: SquareSplitVerticalLightIcon,
	regular: SquareSplitVerticalRegularIcon,
	bold: SquareSplitVerticalBoldIcon,
	fill: SquareSplitVerticalFillIcon,
	duotone: SquareSplitVerticalDuotoneIcon,
} as const;

export function SquareSplitVerticalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SquareSplitVerticalIcon as SquareSplitVertical };
