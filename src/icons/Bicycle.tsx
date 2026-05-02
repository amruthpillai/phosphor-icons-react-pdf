import { BicycleIcon as BicycleBoldIcon } from "../bold/Bicycle";
import { BicycleIcon as BicycleDuotoneIcon } from "../duotone/Bicycle";
import { BicycleIcon as BicycleFillIcon } from "../fill/Bicycle";
import { BicycleIcon as BicycleLightIcon } from "../light/Bicycle";
import { BicycleIcon as BicycleRegularIcon } from "../regular/Bicycle";
import { BicycleIcon as BicycleThinIcon } from "../thin/Bicycle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BicycleThinIcon,
	light: BicycleLightIcon,
	regular: BicycleRegularIcon,
	bold: BicycleBoldIcon,
	fill: BicycleFillIcon,
	duotone: BicycleDuotoneIcon,
} as const;

export function BicycleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BicycleIcon as Bicycle };
