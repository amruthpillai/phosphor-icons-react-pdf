import { BuildingApartmentIcon as BuildingApartmentBoldIcon } from "../bold/BuildingApartment";
import { BuildingApartmentIcon as BuildingApartmentDuotoneIcon } from "../duotone/BuildingApartment";
import { BuildingApartmentIcon as BuildingApartmentFillIcon } from "../fill/BuildingApartment";
import { BuildingApartmentIcon as BuildingApartmentLightIcon } from "../light/BuildingApartment";
import { BuildingApartmentIcon as BuildingApartmentRegularIcon } from "../regular/BuildingApartment";
import { BuildingApartmentIcon as BuildingApartmentThinIcon } from "../thin/BuildingApartment";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BuildingApartmentThinIcon,
	light: BuildingApartmentLightIcon,
	regular: BuildingApartmentRegularIcon,
	bold: BuildingApartmentBoldIcon,
	fill: BuildingApartmentFillIcon,
	duotone: BuildingApartmentDuotoneIcon,
} as const;

export function BuildingApartmentIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BuildingApartmentIcon as BuildingApartment };
