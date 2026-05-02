import { FunnelIcon as FunnelBoldIcon } from "../bold/Funnel";
import { FunnelIcon as FunnelDuotoneIcon } from "../duotone/Funnel";
import { FunnelIcon as FunnelFillIcon } from "../fill/Funnel";
import { FunnelIcon as FunnelLightIcon } from "../light/Funnel";
import { FunnelIcon as FunnelRegularIcon } from "../regular/Funnel";
import { FunnelIcon as FunnelThinIcon } from "../thin/Funnel";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FunnelThinIcon,
	light: FunnelLightIcon,
	regular: FunnelRegularIcon,
	bold: FunnelBoldIcon,
	fill: FunnelFillIcon,
	duotone: FunnelDuotoneIcon,
} as const;

export function FunnelIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FunnelIcon as Funnel };
