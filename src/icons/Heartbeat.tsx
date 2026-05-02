import { HeartbeatIcon as HeartbeatBoldIcon } from "../bold/Heartbeat";
import { HeartbeatIcon as HeartbeatDuotoneIcon } from "../duotone/Heartbeat";
import { HeartbeatIcon as HeartbeatFillIcon } from "../fill/Heartbeat";
import { HeartbeatIcon as HeartbeatLightIcon } from "../light/Heartbeat";
import { HeartbeatIcon as HeartbeatRegularIcon } from "../regular/Heartbeat";
import { HeartbeatIcon as HeartbeatThinIcon } from "../thin/Heartbeat";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HeartbeatThinIcon,
	light: HeartbeatLightIcon,
	regular: HeartbeatRegularIcon,
	bold: HeartbeatBoldIcon,
	fill: HeartbeatFillIcon,
	duotone: HeartbeatDuotoneIcon,
} as const;

export function HeartbeatIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HeartbeatIcon as Heartbeat };
