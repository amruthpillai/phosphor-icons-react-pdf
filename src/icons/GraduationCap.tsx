import { GraduationCapIcon as GraduationCapBoldIcon } from "../bold/GraduationCap";
import { GraduationCapIcon as GraduationCapDuotoneIcon } from "../duotone/GraduationCap";
import { GraduationCapIcon as GraduationCapFillIcon } from "../fill/GraduationCap";
import { GraduationCapIcon as GraduationCapLightIcon } from "../light/GraduationCap";
import { GraduationCapIcon as GraduationCapRegularIcon } from "../regular/GraduationCap";
import { GraduationCapIcon as GraduationCapThinIcon } from "../thin/GraduationCap";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GraduationCapThinIcon,
	light: GraduationCapLightIcon,
	regular: GraduationCapRegularIcon,
	bold: GraduationCapBoldIcon,
	fill: GraduationCapFillIcon,
	duotone: GraduationCapDuotoneIcon,
} as const;

export function GraduationCapIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GraduationCapIcon as GraduationCap };
