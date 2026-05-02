import { CaretCircleDoubleLeftIcon as CaretCircleDoubleLeftBoldIcon } from "../bold/CaretCircleDoubleLeft";
import { CaretCircleDoubleLeftIcon as CaretCircleDoubleLeftDuotoneIcon } from "../duotone/CaretCircleDoubleLeft";
import { CaretCircleDoubleLeftIcon as CaretCircleDoubleLeftFillIcon } from "../fill/CaretCircleDoubleLeft";
import { CaretCircleDoubleLeftIcon as CaretCircleDoubleLeftLightIcon } from "../light/CaretCircleDoubleLeft";
import { CaretCircleDoubleLeftIcon as CaretCircleDoubleLeftRegularIcon } from "../regular/CaretCircleDoubleLeft";
import { CaretCircleDoubleLeftIcon as CaretCircleDoubleLeftThinIcon } from "../thin/CaretCircleDoubleLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretCircleDoubleLeftThinIcon,
	light: CaretCircleDoubleLeftLightIcon,
	regular: CaretCircleDoubleLeftRegularIcon,
	bold: CaretCircleDoubleLeftBoldIcon,
	fill: CaretCircleDoubleLeftFillIcon,
	duotone: CaretCircleDoubleLeftDuotoneIcon,
} as const;

export function CaretCircleDoubleLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretCircleDoubleLeftIcon as CaretCircleDoubleLeft };
