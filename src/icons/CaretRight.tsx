import { CaretRightIcon as CaretRightBoldIcon } from "../bold/CaretRight";
import { CaretRightIcon as CaretRightDuotoneIcon } from "../duotone/CaretRight";
import { CaretRightIcon as CaretRightFillIcon } from "../fill/CaretRight";
import { CaretRightIcon as CaretRightLightIcon } from "../light/CaretRight";
import { CaretRightIcon as CaretRightRegularIcon } from "../regular/CaretRight";
import { CaretRightIcon as CaretRightThinIcon } from "../thin/CaretRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretRightThinIcon,
	light: CaretRightLightIcon,
	regular: CaretRightRegularIcon,
	bold: CaretRightBoldIcon,
	fill: CaretRightFillIcon,
	duotone: CaretRightDuotoneIcon,
} as const;

export function CaretRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretRightIcon as CaretRight };
