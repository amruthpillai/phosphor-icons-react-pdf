import { ChatDotsIcon as ChatDotsBoldIcon } from "../bold/ChatDots";
import { ChatDotsIcon as ChatDotsDuotoneIcon } from "../duotone/ChatDots";
import { ChatDotsIcon as ChatDotsFillIcon } from "../fill/ChatDots";
import { ChatDotsIcon as ChatDotsLightIcon } from "../light/ChatDots";
import { ChatDotsIcon as ChatDotsRegularIcon } from "../regular/ChatDots";
import { ChatDotsIcon as ChatDotsThinIcon } from "../thin/ChatDots";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChatDotsThinIcon,
	light: ChatDotsLightIcon,
	regular: ChatDotsRegularIcon,
	bold: ChatDotsBoldIcon,
	fill: ChatDotsFillIcon,
	duotone: ChatDotsDuotoneIcon,
} as const;

export function ChatDotsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChatDotsIcon as ChatDots };
