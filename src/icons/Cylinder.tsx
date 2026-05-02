import { CylinderIcon as CylinderBoldIcon } from "../bold/Cylinder";
import { CylinderIcon as CylinderDuotoneIcon } from "../duotone/Cylinder";
import { CylinderIcon as CylinderFillIcon } from "../fill/Cylinder";
import { CylinderIcon as CylinderLightIcon } from "../light/Cylinder";
import { CylinderIcon as CylinderRegularIcon } from "../regular/Cylinder";
import { CylinderIcon as CylinderThinIcon } from "../thin/Cylinder";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CylinderThinIcon,
	light: CylinderLightIcon,
	regular: CylinderRegularIcon,
	bold: CylinderBoldIcon,
	fill: CylinderFillIcon,
	duotone: CylinderDuotoneIcon,
} as const;

export function CylinderIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CylinderIcon as Cylinder };
