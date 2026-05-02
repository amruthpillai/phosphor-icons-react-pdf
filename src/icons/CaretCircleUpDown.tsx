import { CaretCircleUpDownIcon as CaretCircleUpDownBoldIcon } from "../bold/CaretCircleUpDown";
import { CaretCircleUpDownIcon as CaretCircleUpDownDuotoneIcon } from "../duotone/CaretCircleUpDown";
import { CaretCircleUpDownIcon as CaretCircleUpDownFillIcon } from "../fill/CaretCircleUpDown";
import { CaretCircleUpDownIcon as CaretCircleUpDownLightIcon } from "../light/CaretCircleUpDown";
import { CaretCircleUpDownIcon as CaretCircleUpDownRegularIcon } from "../regular/CaretCircleUpDown";
import { CaretCircleUpDownIcon as CaretCircleUpDownThinIcon } from "../thin/CaretCircleUpDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretCircleUpDownThinIcon,
	light: CaretCircleUpDownLightIcon,
	regular: CaretCircleUpDownRegularIcon,
	bold: CaretCircleUpDownBoldIcon,
	fill: CaretCircleUpDownFillIcon,
	duotone: CaretCircleUpDownDuotoneIcon,
} as const;

export function CaretCircleUpDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretCircleUpDownIcon as CaretCircleUpDown };
