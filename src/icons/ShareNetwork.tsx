import { ShareNetworkIcon as ShareNetworkBoldIcon } from "../bold/ShareNetwork";
import { ShareNetworkIcon as ShareNetworkDuotoneIcon } from "../duotone/ShareNetwork";
import { ShareNetworkIcon as ShareNetworkFillIcon } from "../fill/ShareNetwork";
import { ShareNetworkIcon as ShareNetworkLightIcon } from "../light/ShareNetwork";
import { ShareNetworkIcon as ShareNetworkRegularIcon } from "../regular/ShareNetwork";
import { ShareNetworkIcon as ShareNetworkThinIcon } from "../thin/ShareNetwork";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShareNetworkThinIcon,
	light: ShareNetworkLightIcon,
	regular: ShareNetworkRegularIcon,
	bold: ShareNetworkBoldIcon,
	fill: ShareNetworkFillIcon,
	duotone: ShareNetworkDuotoneIcon,
} as const;

export function ShareNetworkIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShareNetworkIcon as ShareNetwork };
