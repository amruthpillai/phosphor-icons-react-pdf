import { AmbulanceIcon as AmbulanceBoldIcon } from "../bold/Ambulance";
import { AmbulanceIcon as AmbulanceDuotoneIcon } from "../duotone/Ambulance";
import { AmbulanceIcon as AmbulanceFillIcon } from "../fill/Ambulance";
import { AmbulanceIcon as AmbulanceLightIcon } from "../light/Ambulance";
import { AmbulanceIcon as AmbulanceRegularIcon } from "../regular/Ambulance";
import { AmbulanceIcon as AmbulanceThinIcon } from "../thin/Ambulance";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AmbulanceThinIcon,
	light: AmbulanceLightIcon,
	regular: AmbulanceRegularIcon,
	bold: AmbulanceBoldIcon,
	fill: AmbulanceFillIcon,
	duotone: AmbulanceDuotoneIcon,
} as const;

export function AmbulanceIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AmbulanceIcon as Ambulance };
