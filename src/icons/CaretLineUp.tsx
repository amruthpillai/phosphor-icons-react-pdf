import { CaretLineUpIcon as CaretLineUpBoldIcon } from "../bold/CaretLineUp";
import { CaretLineUpIcon as CaretLineUpDuotoneIcon } from "../duotone/CaretLineUp";
import { CaretLineUpIcon as CaretLineUpFillIcon } from "../fill/CaretLineUp";
import { CaretLineUpIcon as CaretLineUpLightIcon } from "../light/CaretLineUp";
import { CaretLineUpIcon as CaretLineUpRegularIcon } from "../regular/CaretLineUp";
import { CaretLineUpIcon as CaretLineUpThinIcon } from "../thin/CaretLineUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretLineUpThinIcon,
	light: CaretLineUpLightIcon,
	regular: CaretLineUpRegularIcon,
	bold: CaretLineUpBoldIcon,
	fill: CaretLineUpFillIcon,
	duotone: CaretLineUpDuotoneIcon,
} as const;

export function CaretLineUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretLineUpIcon as CaretLineUp };
