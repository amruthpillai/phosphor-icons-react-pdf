import { CarSimpleIcon as CarSimpleBoldIcon } from "../bold/CarSimple";
import { CarSimpleIcon as CarSimpleDuotoneIcon } from "../duotone/CarSimple";
import { CarSimpleIcon as CarSimpleFillIcon } from "../fill/CarSimple";
import { CarSimpleIcon as CarSimpleLightIcon } from "../light/CarSimple";
import { CarSimpleIcon as CarSimpleRegularIcon } from "../regular/CarSimple";
import { CarSimpleIcon as CarSimpleThinIcon } from "../thin/CarSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CarSimpleThinIcon,
	light: CarSimpleLightIcon,
	regular: CarSimpleRegularIcon,
	bold: CarSimpleBoldIcon,
	fill: CarSimpleFillIcon,
	duotone: CarSimpleDuotoneIcon,
} as const;

export function CarSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CarSimpleIcon as CarSimple };
