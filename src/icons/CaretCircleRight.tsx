import { CaretCircleRightIcon as CaretCircleRightBoldIcon } from "../bold/CaretCircleRight";
import { CaretCircleRightIcon as CaretCircleRightDuotoneIcon } from "../duotone/CaretCircleRight";
import { CaretCircleRightIcon as CaretCircleRightFillIcon } from "../fill/CaretCircleRight";
import { CaretCircleRightIcon as CaretCircleRightLightIcon } from "../light/CaretCircleRight";
import { CaretCircleRightIcon as CaretCircleRightRegularIcon } from "../regular/CaretCircleRight";
import { CaretCircleRightIcon as CaretCircleRightThinIcon } from "../thin/CaretCircleRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretCircleRightThinIcon,
	light: CaretCircleRightLightIcon,
	regular: CaretCircleRightRegularIcon,
	bold: CaretCircleRightBoldIcon,
	fill: CaretCircleRightFillIcon,
	duotone: CaretCircleRightDuotoneIcon,
} as const;

export function CaretCircleRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretCircleRightIcon as CaretCircleRight };
