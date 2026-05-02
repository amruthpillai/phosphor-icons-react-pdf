import { CaretDoubleRightIcon as CaretDoubleRightBoldIcon } from "../bold/CaretDoubleRight";
import { CaretDoubleRightIcon as CaretDoubleRightDuotoneIcon } from "../duotone/CaretDoubleRight";
import { CaretDoubleRightIcon as CaretDoubleRightFillIcon } from "../fill/CaretDoubleRight";
import { CaretDoubleRightIcon as CaretDoubleRightLightIcon } from "../light/CaretDoubleRight";
import { CaretDoubleRightIcon as CaretDoubleRightRegularIcon } from "../regular/CaretDoubleRight";
import { CaretDoubleRightIcon as CaretDoubleRightThinIcon } from "../thin/CaretDoubleRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretDoubleRightThinIcon,
	light: CaretDoubleRightLightIcon,
	regular: CaretDoubleRightRegularIcon,
	bold: CaretDoubleRightBoldIcon,
	fill: CaretDoubleRightFillIcon,
	duotone: CaretDoubleRightDuotoneIcon,
} as const;

export function CaretDoubleRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretDoubleRightIcon as CaretDoubleRight };
