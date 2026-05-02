import { ChatCircleDotsIcon as ChatCircleDotsBoldIcon } from "../bold/ChatCircleDots";
import { ChatCircleDotsIcon as ChatCircleDotsDuotoneIcon } from "../duotone/ChatCircleDots";
import { ChatCircleDotsIcon as ChatCircleDotsFillIcon } from "../fill/ChatCircleDots";
import { ChatCircleDotsIcon as ChatCircleDotsLightIcon } from "../light/ChatCircleDots";
import { ChatCircleDotsIcon as ChatCircleDotsRegularIcon } from "../regular/ChatCircleDots";
import { ChatCircleDotsIcon as ChatCircleDotsThinIcon } from "../thin/ChatCircleDots";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChatCircleDotsThinIcon,
	light: ChatCircleDotsLightIcon,
	regular: ChatCircleDotsRegularIcon,
	bold: ChatCircleDotsBoldIcon,
	fill: ChatCircleDotsFillIcon,
	duotone: ChatCircleDotsDuotoneIcon,
} as const;

export function ChatCircleDotsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChatCircleDotsIcon as ChatCircleDots };
