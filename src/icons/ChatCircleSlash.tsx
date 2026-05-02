import { ChatCircleSlashIcon as ChatCircleSlashBoldIcon } from "../bold/ChatCircleSlash";
import { ChatCircleSlashIcon as ChatCircleSlashDuotoneIcon } from "../duotone/ChatCircleSlash";
import { ChatCircleSlashIcon as ChatCircleSlashFillIcon } from "../fill/ChatCircleSlash";
import { ChatCircleSlashIcon as ChatCircleSlashLightIcon } from "../light/ChatCircleSlash";
import { ChatCircleSlashIcon as ChatCircleSlashRegularIcon } from "../regular/ChatCircleSlash";
import { ChatCircleSlashIcon as ChatCircleSlashThinIcon } from "../thin/ChatCircleSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChatCircleSlashThinIcon,
	light: ChatCircleSlashLightIcon,
	regular: ChatCircleSlashRegularIcon,
	bold: ChatCircleSlashBoldIcon,
	fill: ChatCircleSlashFillIcon,
	duotone: ChatCircleSlashDuotoneIcon,
} as const;

export function ChatCircleSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChatCircleSlashIcon as ChatCircleSlash };
