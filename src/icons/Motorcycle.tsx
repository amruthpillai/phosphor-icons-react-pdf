import { MotorcycleIcon as MotorcycleBoldIcon } from "../bold/Motorcycle";
import { MotorcycleIcon as MotorcycleDuotoneIcon } from "../duotone/Motorcycle";
import { MotorcycleIcon as MotorcycleFillIcon } from "../fill/Motorcycle";
import { MotorcycleIcon as MotorcycleLightIcon } from "../light/Motorcycle";
import { MotorcycleIcon as MotorcycleRegularIcon } from "../regular/Motorcycle";
import { MotorcycleIcon as MotorcycleThinIcon } from "../thin/Motorcycle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MotorcycleThinIcon,
	light: MotorcycleLightIcon,
	regular: MotorcycleRegularIcon,
	bold: MotorcycleBoldIcon,
	fill: MotorcycleFillIcon,
	duotone: MotorcycleDuotoneIcon,
} as const;

export function MotorcycleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MotorcycleIcon as Motorcycle };
