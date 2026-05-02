import { ChatCircleIcon as ChatCircleBoldIcon } from "../bold/ChatCircle";
import { ChatCircleIcon as ChatCircleDuotoneIcon } from "../duotone/ChatCircle";
import { ChatCircleIcon as ChatCircleFillIcon } from "../fill/ChatCircle";
import { ChatCircleIcon as ChatCircleLightIcon } from "../light/ChatCircle";
import { ChatCircleIcon as ChatCircleRegularIcon } from "../regular/ChatCircle";
import { ChatCircleIcon as ChatCircleThinIcon } from "../thin/ChatCircle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChatCircleThinIcon,
	light: ChatCircleLightIcon,
	regular: ChatCircleRegularIcon,
	bold: ChatCircleBoldIcon,
	fill: ChatCircleFillIcon,
	duotone: ChatCircleDuotoneIcon,
} as const;

export function ChatCircleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChatCircleIcon as ChatCircle };
