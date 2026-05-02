import { FunnelSimpleXIcon as FunnelSimpleXBoldIcon } from "../bold/FunnelSimpleX";
import { FunnelSimpleXIcon as FunnelSimpleXDuotoneIcon } from "../duotone/FunnelSimpleX";
import { FunnelSimpleXIcon as FunnelSimpleXFillIcon } from "../fill/FunnelSimpleX";
import { FunnelSimpleXIcon as FunnelSimpleXLightIcon } from "../light/FunnelSimpleX";
import { FunnelSimpleXIcon as FunnelSimpleXRegularIcon } from "../regular/FunnelSimpleX";
import { FunnelSimpleXIcon as FunnelSimpleXThinIcon } from "../thin/FunnelSimpleX";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FunnelSimpleXThinIcon,
	light: FunnelSimpleXLightIcon,
	regular: FunnelSimpleXRegularIcon,
	bold: FunnelSimpleXBoldIcon,
	fill: FunnelSimpleXFillIcon,
	duotone: FunnelSimpleXDuotoneIcon,
} as const;

export function FunnelSimpleXIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FunnelSimpleXIcon as FunnelSimpleX };
