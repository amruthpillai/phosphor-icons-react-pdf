import { CaretCircleDoubleDownIcon as CaretCircleDoubleDownBoldIcon } from "../bold/CaretCircleDoubleDown";
import { CaretCircleDoubleDownIcon as CaretCircleDoubleDownDuotoneIcon } from "../duotone/CaretCircleDoubleDown";
import { CaretCircleDoubleDownIcon as CaretCircleDoubleDownFillIcon } from "../fill/CaretCircleDoubleDown";
import { CaretCircleDoubleDownIcon as CaretCircleDoubleDownLightIcon } from "../light/CaretCircleDoubleDown";
import { CaretCircleDoubleDownIcon as CaretCircleDoubleDownRegularIcon } from "../regular/CaretCircleDoubleDown";
import { CaretCircleDoubleDownIcon as CaretCircleDoubleDownThinIcon } from "../thin/CaretCircleDoubleDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretCircleDoubleDownThinIcon,
	light: CaretCircleDoubleDownLightIcon,
	regular: CaretCircleDoubleDownRegularIcon,
	bold: CaretCircleDoubleDownBoldIcon,
	fill: CaretCircleDoubleDownFillIcon,
	duotone: CaretCircleDoubleDownDuotoneIcon,
} as const;

export function CaretCircleDoubleDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretCircleDoubleDownIcon as CaretCircleDoubleDown };
