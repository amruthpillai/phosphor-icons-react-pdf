import { NetworkXIcon as NetworkXBoldIcon } from "../bold/NetworkX";
import { NetworkXIcon as NetworkXDuotoneIcon } from "../duotone/NetworkX";
import { NetworkXIcon as NetworkXFillIcon } from "../fill/NetworkX";
import { NetworkXIcon as NetworkXLightIcon } from "../light/NetworkX";
import { NetworkXIcon as NetworkXRegularIcon } from "../regular/NetworkX";
import { NetworkXIcon as NetworkXThinIcon } from "../thin/NetworkX";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NetworkXThinIcon,
	light: NetworkXLightIcon,
	regular: NetworkXRegularIcon,
	bold: NetworkXBoldIcon,
	fill: NetworkXFillIcon,
	duotone: NetworkXDuotoneIcon,
} as const;

export function NetworkXIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NetworkXIcon as NetworkX };
