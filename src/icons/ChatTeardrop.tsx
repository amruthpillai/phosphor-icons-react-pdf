import { ChatTeardropIcon as ChatTeardropBoldIcon } from "../bold/ChatTeardrop";
import { ChatTeardropIcon as ChatTeardropDuotoneIcon } from "../duotone/ChatTeardrop";
import { ChatTeardropIcon as ChatTeardropFillIcon } from "../fill/ChatTeardrop";
import { ChatTeardropIcon as ChatTeardropLightIcon } from "../light/ChatTeardrop";
import { ChatTeardropIcon as ChatTeardropRegularIcon } from "../regular/ChatTeardrop";
import { ChatTeardropIcon as ChatTeardropThinIcon } from "../thin/ChatTeardrop";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChatTeardropThinIcon,
	light: ChatTeardropLightIcon,
	regular: ChatTeardropRegularIcon,
	bold: ChatTeardropBoldIcon,
	fill: ChatTeardropFillIcon,
	duotone: ChatTeardropDuotoneIcon,
} as const;

export function ChatTeardropIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChatTeardropIcon as ChatTeardrop };
