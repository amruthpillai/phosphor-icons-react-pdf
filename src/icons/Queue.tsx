import { QueueIcon as QueueBoldIcon } from "../bold/Queue";
import { QueueIcon as QueueDuotoneIcon } from "../duotone/Queue";
import { QueueIcon as QueueFillIcon } from "../fill/Queue";
import { QueueIcon as QueueLightIcon } from "../light/Queue";
import { QueueIcon as QueueRegularIcon } from "../regular/Queue";
import { QueueIcon as QueueThinIcon } from "../thin/Queue";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: QueueThinIcon,
	light: QueueLightIcon,
	regular: QueueRegularIcon,
	bold: QueueBoldIcon,
	fill: QueueFillIcon,
	duotone: QueueDuotoneIcon,
} as const;

export function QueueIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { QueueIcon as Queue };
