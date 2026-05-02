import { CaretLineDownIcon as CaretLineDownBoldIcon } from "../bold/CaretLineDown";
import { CaretLineDownIcon as CaretLineDownDuotoneIcon } from "../duotone/CaretLineDown";
import { CaretLineDownIcon as CaretLineDownFillIcon } from "../fill/CaretLineDown";
import { CaretLineDownIcon as CaretLineDownLightIcon } from "../light/CaretLineDown";
import { CaretLineDownIcon as CaretLineDownRegularIcon } from "../regular/CaretLineDown";
import { CaretLineDownIcon as CaretLineDownThinIcon } from "../thin/CaretLineDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretLineDownThinIcon,
	light: CaretLineDownLightIcon,
	regular: CaretLineDownRegularIcon,
	bold: CaretLineDownBoldIcon,
	fill: CaretLineDownFillIcon,
	duotone: CaretLineDownDuotoneIcon,
} as const;

export function CaretLineDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretLineDownIcon as CaretLineDown };
