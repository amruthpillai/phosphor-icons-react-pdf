import { CaretCircleDoubleUpIcon as CaretCircleDoubleUpBoldIcon } from "../bold/CaretCircleDoubleUp";
import { CaretCircleDoubleUpIcon as CaretCircleDoubleUpDuotoneIcon } from "../duotone/CaretCircleDoubleUp";
import { CaretCircleDoubleUpIcon as CaretCircleDoubleUpFillIcon } from "../fill/CaretCircleDoubleUp";
import { CaretCircleDoubleUpIcon as CaretCircleDoubleUpLightIcon } from "../light/CaretCircleDoubleUp";
import { CaretCircleDoubleUpIcon as CaretCircleDoubleUpRegularIcon } from "../regular/CaretCircleDoubleUp";
import { CaretCircleDoubleUpIcon as CaretCircleDoubleUpThinIcon } from "../thin/CaretCircleDoubleUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretCircleDoubleUpThinIcon,
	light: CaretCircleDoubleUpLightIcon,
	regular: CaretCircleDoubleUpRegularIcon,
	bold: CaretCircleDoubleUpBoldIcon,
	fill: CaretCircleDoubleUpFillIcon,
	duotone: CaretCircleDoubleUpDuotoneIcon,
} as const;

export function CaretCircleDoubleUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretCircleDoubleUpIcon as CaretCircleDoubleUp };
