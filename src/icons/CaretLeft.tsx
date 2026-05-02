import { CaretLeftIcon as CaretLeftBoldIcon } from "../bold/CaretLeft";
import { CaretLeftIcon as CaretLeftDuotoneIcon } from "../duotone/CaretLeft";
import { CaretLeftIcon as CaretLeftFillIcon } from "../fill/CaretLeft";
import { CaretLeftIcon as CaretLeftLightIcon } from "../light/CaretLeft";
import { CaretLeftIcon as CaretLeftRegularIcon } from "../regular/CaretLeft";
import { CaretLeftIcon as CaretLeftThinIcon } from "../thin/CaretLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretLeftThinIcon,
	light: CaretLeftLightIcon,
	regular: CaretLeftRegularIcon,
	bold: CaretLeftBoldIcon,
	fill: CaretLeftFillIcon,
	duotone: CaretLeftDuotoneIcon,
} as const;

export function CaretLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretLeftIcon as CaretLeft };
