import { SuitcaseSimpleIcon as SuitcaseSimpleBoldIcon } from "../bold/SuitcaseSimple";
import { SuitcaseSimpleIcon as SuitcaseSimpleDuotoneIcon } from "../duotone/SuitcaseSimple";
import { SuitcaseSimpleIcon as SuitcaseSimpleFillIcon } from "../fill/SuitcaseSimple";
import { SuitcaseSimpleIcon as SuitcaseSimpleLightIcon } from "../light/SuitcaseSimple";
import { SuitcaseSimpleIcon as SuitcaseSimpleRegularIcon } from "../regular/SuitcaseSimple";
import { SuitcaseSimpleIcon as SuitcaseSimpleThinIcon } from "../thin/SuitcaseSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SuitcaseSimpleThinIcon,
	light: SuitcaseSimpleLightIcon,
	regular: SuitcaseSimpleRegularIcon,
	bold: SuitcaseSimpleBoldIcon,
	fill: SuitcaseSimpleFillIcon,
	duotone: SuitcaseSimpleDuotoneIcon,
} as const;

export function SuitcaseSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SuitcaseSimpleIcon as SuitcaseSimple };
