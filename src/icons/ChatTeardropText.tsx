import { ChatTeardropTextIcon as ChatTeardropTextBoldIcon } from "../bold/ChatTeardropText";
import { ChatTeardropTextIcon as ChatTeardropTextDuotoneIcon } from "../duotone/ChatTeardropText";
import { ChatTeardropTextIcon as ChatTeardropTextFillIcon } from "../fill/ChatTeardropText";
import { ChatTeardropTextIcon as ChatTeardropTextLightIcon } from "../light/ChatTeardropText";
import { ChatTeardropTextIcon as ChatTeardropTextRegularIcon } from "../regular/ChatTeardropText";
import { ChatTeardropTextIcon as ChatTeardropTextThinIcon } from "../thin/ChatTeardropText";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChatTeardropTextThinIcon,
	light: ChatTeardropTextLightIcon,
	regular: ChatTeardropTextRegularIcon,
	bold: ChatTeardropTextBoldIcon,
	fill: ChatTeardropTextFillIcon,
	duotone: ChatTeardropTextDuotoneIcon,
} as const;

export function ChatTeardropTextIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChatTeardropTextIcon as ChatTeardropText };
