import { CaretCircleDoubleRightIcon as CaretCircleDoubleRightBoldIcon } from "../bold/CaretCircleDoubleRight";
import { CaretCircleDoubleRightIcon as CaretCircleDoubleRightDuotoneIcon } from "../duotone/CaretCircleDoubleRight";
import { CaretCircleDoubleRightIcon as CaretCircleDoubleRightFillIcon } from "../fill/CaretCircleDoubleRight";
import { CaretCircleDoubleRightIcon as CaretCircleDoubleRightLightIcon } from "../light/CaretCircleDoubleRight";
import { CaretCircleDoubleRightIcon as CaretCircleDoubleRightRegularIcon } from "../regular/CaretCircleDoubleRight";
import { CaretCircleDoubleRightIcon as CaretCircleDoubleRightThinIcon } from "../thin/CaretCircleDoubleRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretCircleDoubleRightThinIcon,
	light: CaretCircleDoubleRightLightIcon,
	regular: CaretCircleDoubleRightRegularIcon,
	bold: CaretCircleDoubleRightBoldIcon,
	fill: CaretCircleDoubleRightFillIcon,
	duotone: CaretCircleDoubleRightDuotoneIcon,
} as const;

export function CaretCircleDoubleRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretCircleDoubleRightIcon as CaretCircleDoubleRight };
