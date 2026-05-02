import { SunDimIcon as SunDimBoldIcon } from "../bold/SunDim";
import { SunDimIcon as SunDimDuotoneIcon } from "../duotone/SunDim";
import { SunDimIcon as SunDimFillIcon } from "../fill/SunDim";
import { SunDimIcon as SunDimLightIcon } from "../light/SunDim";
import { SunDimIcon as SunDimRegularIcon } from "../regular/SunDim";
import { SunDimIcon as SunDimThinIcon } from "../thin/SunDim";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SunDimThinIcon,
	light: SunDimLightIcon,
	regular: SunDimRegularIcon,
	bold: SunDimBoldIcon,
	fill: SunDimFillIcon,
	duotone: SunDimDuotoneIcon,
} as const;

export function SunDimIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SunDimIcon as SunDim };
