import { CaretCircleDownIcon as CaretCircleDownBoldIcon } from "../bold/CaretCircleDown";
import { CaretCircleDownIcon as CaretCircleDownDuotoneIcon } from "../duotone/CaretCircleDown";
import { CaretCircleDownIcon as CaretCircleDownFillIcon } from "../fill/CaretCircleDown";
import { CaretCircleDownIcon as CaretCircleDownLightIcon } from "../light/CaretCircleDown";
import { CaretCircleDownIcon as CaretCircleDownRegularIcon } from "../regular/CaretCircleDown";
import { CaretCircleDownIcon as CaretCircleDownThinIcon } from "../thin/CaretCircleDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretCircleDownThinIcon,
	light: CaretCircleDownLightIcon,
	regular: CaretCircleDownRegularIcon,
	bold: CaretCircleDownBoldIcon,
	fill: CaretCircleDownFillIcon,
	duotone: CaretCircleDownDuotoneIcon,
} as const;

export function CaretCircleDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretCircleDownIcon as CaretCircleDown };
