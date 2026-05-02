import { CaretUpDownIcon as CaretUpDownBoldIcon } from "../bold/CaretUpDown";
import { CaretUpDownIcon as CaretUpDownDuotoneIcon } from "../duotone/CaretUpDown";
import { CaretUpDownIcon as CaretUpDownFillIcon } from "../fill/CaretUpDown";
import { CaretUpDownIcon as CaretUpDownLightIcon } from "../light/CaretUpDown";
import { CaretUpDownIcon as CaretUpDownRegularIcon } from "../regular/CaretUpDown";
import { CaretUpDownIcon as CaretUpDownThinIcon } from "../thin/CaretUpDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretUpDownThinIcon,
	light: CaretUpDownLightIcon,
	regular: CaretUpDownRegularIcon,
	bold: CaretUpDownBoldIcon,
	fill: CaretUpDownFillIcon,
	duotone: CaretUpDownDuotoneIcon,
} as const;

export function CaretUpDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretUpDownIcon as CaretUpDown };
