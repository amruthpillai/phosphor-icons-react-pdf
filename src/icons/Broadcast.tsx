import { BroadcastIcon as BroadcastBoldIcon } from "../bold/Broadcast";
import { BroadcastIcon as BroadcastDuotoneIcon } from "../duotone/Broadcast";
import { BroadcastIcon as BroadcastFillIcon } from "../fill/Broadcast";
import { BroadcastIcon as BroadcastLightIcon } from "../light/Broadcast";
import { BroadcastIcon as BroadcastRegularIcon } from "../regular/Broadcast";
import { BroadcastIcon as BroadcastThinIcon } from "../thin/Broadcast";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BroadcastThinIcon,
	light: BroadcastLightIcon,
	regular: BroadcastRegularIcon,
	bold: BroadcastBoldIcon,
	fill: BroadcastFillIcon,
	duotone: BroadcastDuotoneIcon,
} as const;

export function BroadcastIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BroadcastIcon as Broadcast };
