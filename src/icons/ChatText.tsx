import { ChatTextIcon as ChatTextBoldIcon } from "../bold/ChatText";
import { ChatTextIcon as ChatTextDuotoneIcon } from "../duotone/ChatText";
import { ChatTextIcon as ChatTextFillIcon } from "../fill/ChatText";
import { ChatTextIcon as ChatTextLightIcon } from "../light/ChatText";
import { ChatTextIcon as ChatTextRegularIcon } from "../regular/ChatText";
import { ChatTextIcon as ChatTextThinIcon } from "../thin/ChatText";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChatTextThinIcon,
	light: ChatTextLightIcon,
	regular: ChatTextRegularIcon,
	bold: ChatTextBoldIcon,
	fill: ChatTextFillIcon,
	duotone: ChatTextDuotoneIcon,
} as const;

export function ChatTextIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChatTextIcon as ChatText };
