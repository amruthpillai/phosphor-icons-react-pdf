import { ChatTeardropDotsIcon as ChatTeardropDotsBoldIcon } from "../bold/ChatTeardropDots";
import { ChatTeardropDotsIcon as ChatTeardropDotsDuotoneIcon } from "../duotone/ChatTeardropDots";
import { ChatTeardropDotsIcon as ChatTeardropDotsFillIcon } from "../fill/ChatTeardropDots";
import { ChatTeardropDotsIcon as ChatTeardropDotsLightIcon } from "../light/ChatTeardropDots";
import { ChatTeardropDotsIcon as ChatTeardropDotsRegularIcon } from "../regular/ChatTeardropDots";
import { ChatTeardropDotsIcon as ChatTeardropDotsThinIcon } from "../thin/ChatTeardropDots";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChatTeardropDotsThinIcon,
	light: ChatTeardropDotsLightIcon,
	regular: ChatTeardropDotsRegularIcon,
	bold: ChatTeardropDotsBoldIcon,
	fill: ChatTeardropDotsFillIcon,
	duotone: ChatTeardropDotsDuotoneIcon,
} as const;

export function ChatTeardropDotsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChatTeardropDotsIcon as ChatTeardropDots };
