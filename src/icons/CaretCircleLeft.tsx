import { CaretCircleLeftIcon as CaretCircleLeftBoldIcon } from "../bold/CaretCircleLeft";
import { CaretCircleLeftIcon as CaretCircleLeftDuotoneIcon } from "../duotone/CaretCircleLeft";
import { CaretCircleLeftIcon as CaretCircleLeftFillIcon } from "../fill/CaretCircleLeft";
import { CaretCircleLeftIcon as CaretCircleLeftLightIcon } from "../light/CaretCircleLeft";
import { CaretCircleLeftIcon as CaretCircleLeftRegularIcon } from "../regular/CaretCircleLeft";
import { CaretCircleLeftIcon as CaretCircleLeftThinIcon } from "../thin/CaretCircleLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretCircleLeftThinIcon,
	light: CaretCircleLeftLightIcon,
	regular: CaretCircleLeftRegularIcon,
	bold: CaretCircleLeftBoldIcon,
	fill: CaretCircleLeftFillIcon,
	duotone: CaretCircleLeftDuotoneIcon,
} as const;

export function CaretCircleLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretCircleLeftIcon as CaretCircleLeft };
