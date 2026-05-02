import { BridgeIcon as BridgeBoldIcon } from "../bold/Bridge";
import { BridgeIcon as BridgeDuotoneIcon } from "../duotone/Bridge";
import { BridgeIcon as BridgeFillIcon } from "../fill/Bridge";
import { BridgeIcon as BridgeLightIcon } from "../light/Bridge";
import { BridgeIcon as BridgeRegularIcon } from "../regular/Bridge";
import { BridgeIcon as BridgeThinIcon } from "../thin/Bridge";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BridgeThinIcon,
	light: BridgeLightIcon,
	regular: BridgeRegularIcon,
	bold: BridgeBoldIcon,
	fill: BridgeFillIcon,
	duotone: BridgeDuotoneIcon,
} as const;

export function BridgeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BridgeIcon as Bridge };
