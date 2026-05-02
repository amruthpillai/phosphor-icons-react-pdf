import { GlobeSimpleIcon as GlobeSimpleBoldIcon } from "../bold/GlobeSimple";
import { GlobeSimpleIcon as GlobeSimpleDuotoneIcon } from "../duotone/GlobeSimple";
import { GlobeSimpleIcon as GlobeSimpleFillIcon } from "../fill/GlobeSimple";
import { GlobeSimpleIcon as GlobeSimpleLightIcon } from "../light/GlobeSimple";
import { GlobeSimpleIcon as GlobeSimpleRegularIcon } from "../regular/GlobeSimple";
import { GlobeSimpleIcon as GlobeSimpleThinIcon } from "../thin/GlobeSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GlobeSimpleThinIcon,
	light: GlobeSimpleLightIcon,
	regular: GlobeSimpleRegularIcon,
	bold: GlobeSimpleBoldIcon,
	fill: GlobeSimpleFillIcon,
	duotone: GlobeSimpleDuotoneIcon,
} as const;

export function GlobeSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GlobeSimpleIcon as GlobeSimple };
