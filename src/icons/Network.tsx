import { NetworkIcon as NetworkBoldIcon } from "../bold/Network";
import { NetworkIcon as NetworkDuotoneIcon } from "../duotone/Network";
import { NetworkIcon as NetworkFillIcon } from "../fill/Network";
import { NetworkIcon as NetworkLightIcon } from "../light/Network";
import { NetworkIcon as NetworkRegularIcon } from "../regular/Network";
import { NetworkIcon as NetworkThinIcon } from "../thin/Network";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NetworkThinIcon,
	light: NetworkLightIcon,
	regular: NetworkRegularIcon,
	bold: NetworkBoldIcon,
	fill: NetworkFillIcon,
	duotone: NetworkDuotoneIcon,
} as const;

export function NetworkIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NetworkIcon as Network };
