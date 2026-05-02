import { CarrotIcon as CarrotBoldIcon } from "../bold/Carrot";
import { CarrotIcon as CarrotDuotoneIcon } from "../duotone/Carrot";
import { CarrotIcon as CarrotFillIcon } from "../fill/Carrot";
import { CarrotIcon as CarrotLightIcon } from "../light/Carrot";
import { CarrotIcon as CarrotRegularIcon } from "../regular/Carrot";
import { CarrotIcon as CarrotThinIcon } from "../thin/Carrot";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CarrotThinIcon,
	light: CarrotLightIcon,
	regular: CarrotRegularIcon,
	bold: CarrotBoldIcon,
	fill: CarrotFillIcon,
	duotone: CarrotDuotoneIcon,
} as const;

export function CarrotIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CarrotIcon as Carrot };
