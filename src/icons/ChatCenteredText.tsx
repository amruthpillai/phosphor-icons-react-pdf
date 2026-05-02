import { ChatCenteredTextIcon as ChatCenteredTextBoldIcon } from "../bold/ChatCenteredText";
import { ChatCenteredTextIcon as ChatCenteredTextDuotoneIcon } from "../duotone/ChatCenteredText";
import { ChatCenteredTextIcon as ChatCenteredTextFillIcon } from "../fill/ChatCenteredText";
import { ChatCenteredTextIcon as ChatCenteredTextLightIcon } from "../light/ChatCenteredText";
import { ChatCenteredTextIcon as ChatCenteredTextRegularIcon } from "../regular/ChatCenteredText";
import { ChatCenteredTextIcon as ChatCenteredTextThinIcon } from "../thin/ChatCenteredText";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChatCenteredTextThinIcon,
	light: ChatCenteredTextLightIcon,
	regular: ChatCenteredTextRegularIcon,
	bold: ChatCenteredTextBoldIcon,
	fill: ChatCenteredTextFillIcon,
	duotone: ChatCenteredTextDuotoneIcon,
} as const;

export function ChatCenteredTextIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChatCenteredTextIcon as ChatCenteredText };
