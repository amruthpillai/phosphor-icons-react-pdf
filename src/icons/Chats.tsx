import { ChatsIcon as ChatsBoldIcon } from "../bold/Chats";
import { ChatsIcon as ChatsDuotoneIcon } from "../duotone/Chats";
import { ChatsIcon as ChatsFillIcon } from "../fill/Chats";
import { ChatsIcon as ChatsLightIcon } from "../light/Chats";
import { ChatsIcon as ChatsRegularIcon } from "../regular/Chats";
import { ChatsIcon as ChatsThinIcon } from "../thin/Chats";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChatsThinIcon,
	light: ChatsLightIcon,
	regular: ChatsRegularIcon,
	bold: ChatsBoldIcon,
	fill: ChatsFillIcon,
	duotone: ChatsDuotoneIcon,
} as const;

export function ChatsIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChatsIcon as Chats };
