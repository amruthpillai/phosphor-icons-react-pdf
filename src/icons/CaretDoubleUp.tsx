import { CaretDoubleUpIcon as CaretDoubleUpBoldIcon } from "../bold/CaretDoubleUp";
import { CaretDoubleUpIcon as CaretDoubleUpDuotoneIcon } from "../duotone/CaretDoubleUp";
import { CaretDoubleUpIcon as CaretDoubleUpFillIcon } from "../fill/CaretDoubleUp";
import { CaretDoubleUpIcon as CaretDoubleUpLightIcon } from "../light/CaretDoubleUp";
import { CaretDoubleUpIcon as CaretDoubleUpRegularIcon } from "../regular/CaretDoubleUp";
import { CaretDoubleUpIcon as CaretDoubleUpThinIcon } from "../thin/CaretDoubleUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretDoubleUpThinIcon,
	light: CaretDoubleUpLightIcon,
	regular: CaretDoubleUpRegularIcon,
	bold: CaretDoubleUpBoldIcon,
	fill: CaretDoubleUpFillIcon,
	duotone: CaretDoubleUpDuotoneIcon,
} as const;

export function CaretDoubleUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretDoubleUpIcon as CaretDoubleUp };
