import { ChatIcon as ChatBoldIcon } from "../bold/Chat";
import { ChatIcon as ChatDuotoneIcon } from "../duotone/Chat";
import { ChatIcon as ChatFillIcon } from "../fill/Chat";
import { ChatIcon as ChatLightIcon } from "../light/Chat";
import { ChatIcon as ChatRegularIcon } from "../regular/Chat";
import { ChatIcon as ChatThinIcon } from "../thin/Chat";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChatThinIcon,
	light: ChatLightIcon,
	regular: ChatRegularIcon,
	bold: ChatBoldIcon,
	fill: ChatFillIcon,
	duotone: ChatDuotoneIcon,
} as const;

export function ChatIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChatIcon as Chat };
