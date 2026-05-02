import { CaretDoubleLeftIcon as CaretDoubleLeftBoldIcon } from "../bold/CaretDoubleLeft";
import { CaretDoubleLeftIcon as CaretDoubleLeftDuotoneIcon } from "../duotone/CaretDoubleLeft";
import { CaretDoubleLeftIcon as CaretDoubleLeftFillIcon } from "../fill/CaretDoubleLeft";
import { CaretDoubleLeftIcon as CaretDoubleLeftLightIcon } from "../light/CaretDoubleLeft";
import { CaretDoubleLeftIcon as CaretDoubleLeftRegularIcon } from "../regular/CaretDoubleLeft";
import { CaretDoubleLeftIcon as CaretDoubleLeftThinIcon } from "../thin/CaretDoubleLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretDoubleLeftThinIcon,
	light: CaretDoubleLeftLightIcon,
	regular: CaretDoubleLeftRegularIcon,
	bold: CaretDoubleLeftBoldIcon,
	fill: CaretDoubleLeftFillIcon,
	duotone: CaretDoubleLeftDuotoneIcon,
} as const;

export function CaretDoubleLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretDoubleLeftIcon as CaretDoubleLeft };
