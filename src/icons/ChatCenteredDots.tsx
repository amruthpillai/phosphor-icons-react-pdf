import { ChatCenteredDotsIcon as ChatCenteredDotsBoldIcon } from "../bold/ChatCenteredDots";
import { ChatCenteredDotsIcon as ChatCenteredDotsDuotoneIcon } from "../duotone/ChatCenteredDots";
import { ChatCenteredDotsIcon as ChatCenteredDotsFillIcon } from "../fill/ChatCenteredDots";
import { ChatCenteredDotsIcon as ChatCenteredDotsLightIcon } from "../light/ChatCenteredDots";
import { ChatCenteredDotsIcon as ChatCenteredDotsRegularIcon } from "../regular/ChatCenteredDots";
import { ChatCenteredDotsIcon as ChatCenteredDotsThinIcon } from "../thin/ChatCenteredDots";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChatCenteredDotsThinIcon,
	light: ChatCenteredDotsLightIcon,
	regular: ChatCenteredDotsRegularIcon,
	bold: ChatCenteredDotsBoldIcon,
	fill: ChatCenteredDotsFillIcon,
	duotone: ChatCenteredDotsDuotoneIcon,
} as const;

export function ChatCenteredDotsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChatCenteredDotsIcon as ChatCenteredDots };
