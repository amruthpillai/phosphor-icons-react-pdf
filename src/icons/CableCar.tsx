import { CableCarIcon as CableCarBoldIcon } from "../bold/CableCar";
import { CableCarIcon as CableCarDuotoneIcon } from "../duotone/CableCar";
import { CableCarIcon as CableCarFillIcon } from "../fill/CableCar";
import { CableCarIcon as CableCarLightIcon } from "../light/CableCar";
import { CableCarIcon as CableCarRegularIcon } from "../regular/CableCar";
import { CableCarIcon as CableCarThinIcon } from "../thin/CableCar";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CableCarThinIcon,
	light: CableCarLightIcon,
	regular: CableCarRegularIcon,
	bold: CableCarBoldIcon,
	fill: CableCarFillIcon,
	duotone: CableCarDuotoneIcon,
} as const;

export function CableCarIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CableCarIcon as CableCar };
