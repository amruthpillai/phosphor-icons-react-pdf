import { ChatSlashIcon as ChatSlashBoldIcon } from "../bold/ChatSlash";
import { ChatSlashIcon as ChatSlashDuotoneIcon } from "../duotone/ChatSlash";
import { ChatSlashIcon as ChatSlashFillIcon } from "../fill/ChatSlash";
import { ChatSlashIcon as ChatSlashLightIcon } from "../light/ChatSlash";
import { ChatSlashIcon as ChatSlashRegularIcon } from "../regular/ChatSlash";
import { ChatSlashIcon as ChatSlashThinIcon } from "../thin/ChatSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChatSlashThinIcon,
	light: ChatSlashLightIcon,
	regular: ChatSlashRegularIcon,
	bold: ChatSlashBoldIcon,
	fill: ChatSlashFillIcon,
	duotone: ChatSlashDuotoneIcon,
} as const;

export function ChatSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChatSlashIcon as ChatSlash };
