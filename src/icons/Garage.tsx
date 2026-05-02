import { GarageIcon as GarageBoldIcon } from "../bold/Garage";
import { GarageIcon as GarageDuotoneIcon } from "../duotone/Garage";
import { GarageIcon as GarageFillIcon } from "../fill/Garage";
import { GarageIcon as GarageLightIcon } from "../light/Garage";
import { GarageIcon as GarageRegularIcon } from "../regular/Garage";
import { GarageIcon as GarageThinIcon } from "../thin/Garage";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GarageThinIcon,
	light: GarageLightIcon,
	regular: GarageRegularIcon,
	bold: GarageBoldIcon,
	fill: GarageFillIcon,
	duotone: GarageDuotoneIcon,
} as const;

export function GarageIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GarageIcon as Garage };
