import { CaretCircleUpIcon as CaretCircleUpBoldIcon } from "../bold/CaretCircleUp";
import { CaretCircleUpIcon as CaretCircleUpDuotoneIcon } from "../duotone/CaretCircleUp";
import { CaretCircleUpIcon as CaretCircleUpFillIcon } from "../fill/CaretCircleUp";
import { CaretCircleUpIcon as CaretCircleUpLightIcon } from "../light/CaretCircleUp";
import { CaretCircleUpIcon as CaretCircleUpRegularIcon } from "../regular/CaretCircleUp";
import { CaretCircleUpIcon as CaretCircleUpThinIcon } from "../thin/CaretCircleUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretCircleUpThinIcon,
	light: CaretCircleUpLightIcon,
	regular: CaretCircleUpRegularIcon,
	bold: CaretCircleUpBoldIcon,
	fill: CaretCircleUpFillIcon,
	duotone: CaretCircleUpDuotoneIcon,
} as const;

export function CaretCircleUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretCircleUpIcon as CaretCircleUp };
