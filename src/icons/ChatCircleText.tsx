import { ChatCircleTextIcon as ChatCircleTextBoldIcon } from "../bold/ChatCircleText";
import { ChatCircleTextIcon as ChatCircleTextDuotoneIcon } from "../duotone/ChatCircleText";
import { ChatCircleTextIcon as ChatCircleTextFillIcon } from "../fill/ChatCircleText";
import { ChatCircleTextIcon as ChatCircleTextLightIcon } from "../light/ChatCircleText";
import { ChatCircleTextIcon as ChatCircleTextRegularIcon } from "../regular/ChatCircleText";
import { ChatCircleTextIcon as ChatCircleTextThinIcon } from "../thin/ChatCircleText";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChatCircleTextThinIcon,
	light: ChatCircleTextLightIcon,
	regular: ChatCircleTextRegularIcon,
	bold: ChatCircleTextBoldIcon,
	fill: ChatCircleTextFillIcon,
	duotone: ChatCircleTextDuotoneIcon,
} as const;

export function ChatCircleTextIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChatCircleTextIcon as ChatCircleText };
