import { CaretLineLeftIcon as CaretLineLeftBoldIcon } from "../bold/CaretLineLeft";
import { CaretLineLeftIcon as CaretLineLeftDuotoneIcon } from "../duotone/CaretLineLeft";
import { CaretLineLeftIcon as CaretLineLeftFillIcon } from "../fill/CaretLineLeft";
import { CaretLineLeftIcon as CaretLineLeftLightIcon } from "../light/CaretLineLeft";
import { CaretLineLeftIcon as CaretLineLeftRegularIcon } from "../regular/CaretLineLeft";
import { CaretLineLeftIcon as CaretLineLeftThinIcon } from "../thin/CaretLineLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretLineLeftThinIcon,
	light: CaretLineLeftLightIcon,
	regular: CaretLineLeftRegularIcon,
	bold: CaretLineLeftBoldIcon,
	fill: CaretLineLeftFillIcon,
	duotone: CaretLineLeftDuotoneIcon,
} as const;

export function CaretLineLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretLineLeftIcon as CaretLineLeft };
