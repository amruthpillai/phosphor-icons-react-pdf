import { ChatCenteredSlashIcon as ChatCenteredSlashBoldIcon } from "../bold/ChatCenteredSlash";
import { ChatCenteredSlashIcon as ChatCenteredSlashDuotoneIcon } from "../duotone/ChatCenteredSlash";
import { ChatCenteredSlashIcon as ChatCenteredSlashFillIcon } from "../fill/ChatCenteredSlash";
import { ChatCenteredSlashIcon as ChatCenteredSlashLightIcon } from "../light/ChatCenteredSlash";
import { ChatCenteredSlashIcon as ChatCenteredSlashRegularIcon } from "../regular/ChatCenteredSlash";
import { ChatCenteredSlashIcon as ChatCenteredSlashThinIcon } from "../thin/ChatCenteredSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChatCenteredSlashThinIcon,
	light: ChatCenteredSlashLightIcon,
	regular: ChatCenteredSlashRegularIcon,
	bold: ChatCenteredSlashBoldIcon,
	fill: ChatCenteredSlashFillIcon,
	duotone: ChatCenteredSlashDuotoneIcon,
} as const;

export function ChatCenteredSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChatCenteredSlashIcon as ChatCenteredSlash };
