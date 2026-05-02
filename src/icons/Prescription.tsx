import { PrescriptionIcon as PrescriptionBoldIcon } from "../bold/Prescription";
import { PrescriptionIcon as PrescriptionDuotoneIcon } from "../duotone/Prescription";
import { PrescriptionIcon as PrescriptionFillIcon } from "../fill/Prescription";
import { PrescriptionIcon as PrescriptionLightIcon } from "../light/Prescription";
import { PrescriptionIcon as PrescriptionRegularIcon } from "../regular/Prescription";
import { PrescriptionIcon as PrescriptionThinIcon } from "../thin/Prescription";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PrescriptionThinIcon,
	light: PrescriptionLightIcon,
	regular: PrescriptionRegularIcon,
	bold: PrescriptionBoldIcon,
	fill: PrescriptionFillIcon,
	duotone: PrescriptionDuotoneIcon,
} as const;

export function PrescriptionIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PrescriptionIcon as Prescription };
