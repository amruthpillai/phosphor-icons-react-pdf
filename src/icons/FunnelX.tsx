import { FunnelXIcon as FunnelXBoldIcon } from "../bold/FunnelX";
import { FunnelXIcon as FunnelXDuotoneIcon } from "../duotone/FunnelX";
import { FunnelXIcon as FunnelXFillIcon } from "../fill/FunnelX";
import { FunnelXIcon as FunnelXLightIcon } from "../light/FunnelX";
import { FunnelXIcon as FunnelXRegularIcon } from "../regular/FunnelX";
import { FunnelXIcon as FunnelXThinIcon } from "../thin/FunnelX";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FunnelXThinIcon,
	light: FunnelXLightIcon,
	regular: FunnelXRegularIcon,
	bold: FunnelXBoldIcon,
	fill: FunnelXFillIcon,
	duotone: FunnelXDuotoneIcon,
} as const;

export function FunnelXIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FunnelXIcon as FunnelX };
