import { FunnelSimpleIcon as FunnelSimpleBoldIcon } from "../bold/FunnelSimple";
import { FunnelSimpleIcon as FunnelSimpleDuotoneIcon } from "../duotone/FunnelSimple";
import { FunnelSimpleIcon as FunnelSimpleFillIcon } from "../fill/FunnelSimple";
import { FunnelSimpleIcon as FunnelSimpleLightIcon } from "../light/FunnelSimple";
import { FunnelSimpleIcon as FunnelSimpleRegularIcon } from "../regular/FunnelSimple";
import { FunnelSimpleIcon as FunnelSimpleThinIcon } from "../thin/FunnelSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FunnelSimpleThinIcon,
	light: FunnelSimpleLightIcon,
	regular: FunnelSimpleRegularIcon,
	bold: FunnelSimpleBoldIcon,
	fill: FunnelSimpleFillIcon,
	duotone: FunnelSimpleDuotoneIcon,
} as const;

export function FunnelSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FunnelSimpleIcon as FunnelSimple };
