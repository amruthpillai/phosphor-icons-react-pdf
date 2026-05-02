import { CarIcon as CarBoldIcon } from "../bold/Car";
import { CarIcon as CarDuotoneIcon } from "../duotone/Car";
import { CarIcon as CarFillIcon } from "../fill/Car";
import { CarIcon as CarLightIcon } from "../light/Car";
import { CarIcon as CarRegularIcon } from "../regular/Car";
import { CarIcon as CarThinIcon } from "../thin/Car";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CarThinIcon,
	light: CarLightIcon,
	regular: CarRegularIcon,
	bold: CarBoldIcon,
	fill: CarFillIcon,
	duotone: CarDuotoneIcon,
} as const;

export function CarIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CarIcon as Car };
