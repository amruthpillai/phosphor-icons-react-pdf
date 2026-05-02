import { CaretLineRightIcon as CaretLineRightBoldIcon } from "../bold/CaretLineRight";
import { CaretLineRightIcon as CaretLineRightDuotoneIcon } from "../duotone/CaretLineRight";
import { CaretLineRightIcon as CaretLineRightFillIcon } from "../fill/CaretLineRight";
import { CaretLineRightIcon as CaretLineRightLightIcon } from "../light/CaretLineRight";
import { CaretLineRightIcon as CaretLineRightRegularIcon } from "../regular/CaretLineRight";
import { CaretLineRightIcon as CaretLineRightThinIcon } from "../thin/CaretLineRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretLineRightThinIcon,
	light: CaretLineRightLightIcon,
	regular: CaretLineRightRegularIcon,
	bold: CaretLineRightBoldIcon,
	fill: CaretLineRightFillIcon,
	duotone: CaretLineRightDuotoneIcon,
} as const;

export function CaretLineRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretLineRightIcon as CaretLineRight };
