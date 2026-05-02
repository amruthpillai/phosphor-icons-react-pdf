import { BuildingOfficeIcon as BuildingOfficeBoldIcon } from "../bold/BuildingOffice";
import { BuildingOfficeIcon as BuildingOfficeDuotoneIcon } from "../duotone/BuildingOffice";
import { BuildingOfficeIcon as BuildingOfficeFillIcon } from "../fill/BuildingOffice";
import { BuildingOfficeIcon as BuildingOfficeLightIcon } from "../light/BuildingOffice";
import { BuildingOfficeIcon as BuildingOfficeRegularIcon } from "../regular/BuildingOffice";
import { BuildingOfficeIcon as BuildingOfficeThinIcon } from "../thin/BuildingOffice";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BuildingOfficeThinIcon,
	light: BuildingOfficeLightIcon,
	regular: BuildingOfficeRegularIcon,
	bold: BuildingOfficeBoldIcon,
	fill: BuildingOfficeFillIcon,
	duotone: BuildingOfficeDuotoneIcon,
} as const;

export function BuildingOfficeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BuildingOfficeIcon as BuildingOffice };
