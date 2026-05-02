import { HospitalIcon as HospitalBoldIcon } from "../bold/Hospital";
import { HospitalIcon as HospitalDuotoneIcon } from "../duotone/Hospital";
import { HospitalIcon as HospitalFillIcon } from "../fill/Hospital";
import { HospitalIcon as HospitalLightIcon } from "../light/Hospital";
import { HospitalIcon as HospitalRegularIcon } from "../regular/Hospital";
import { HospitalIcon as HospitalThinIcon } from "../thin/Hospital";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HospitalThinIcon,
	light: HospitalLightIcon,
	regular: HospitalRegularIcon,
	bold: HospitalBoldIcon,
	fill: HospitalFillIcon,
	duotone: HospitalDuotoneIcon,
} as const;

export function HospitalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HospitalIcon as Hospital };
