import { CaretUpIcon as CaretUpBoldIcon } from "../bold/CaretUp";
import { CaretUpIcon as CaretUpDuotoneIcon } from "../duotone/CaretUp";
import { CaretUpIcon as CaretUpFillIcon } from "../fill/CaretUp";
import { CaretUpIcon as CaretUpLightIcon } from "../light/CaretUp";
import { CaretUpIcon as CaretUpRegularIcon } from "../regular/CaretUp";
import { CaretUpIcon as CaretUpThinIcon } from "../thin/CaretUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretUpThinIcon,
	light: CaretUpLightIcon,
	regular: CaretUpRegularIcon,
	bold: CaretUpBoldIcon,
	fill: CaretUpFillIcon,
	duotone: CaretUpDuotoneIcon,
} as const;

export function CaretUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretUpIcon as CaretUp };
