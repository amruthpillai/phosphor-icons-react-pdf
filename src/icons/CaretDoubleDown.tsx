import { CaretDoubleDownIcon as CaretDoubleDownBoldIcon } from "../bold/CaretDoubleDown";
import { CaretDoubleDownIcon as CaretDoubleDownDuotoneIcon } from "../duotone/CaretDoubleDown";
import { CaretDoubleDownIcon as CaretDoubleDownFillIcon } from "../fill/CaretDoubleDown";
import { CaretDoubleDownIcon as CaretDoubleDownLightIcon } from "../light/CaretDoubleDown";
import { CaretDoubleDownIcon as CaretDoubleDownRegularIcon } from "../regular/CaretDoubleDown";
import { CaretDoubleDownIcon as CaretDoubleDownThinIcon } from "../thin/CaretDoubleDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CaretDoubleDownThinIcon,
	light: CaretDoubleDownLightIcon,
	regular: CaretDoubleDownRegularIcon,
	bold: CaretDoubleDownBoldIcon,
	fill: CaretDoubleDownFillIcon,
	duotone: CaretDoubleDownDuotoneIcon,
} as const;

export function CaretDoubleDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CaretDoubleDownIcon as CaretDoubleDown };
