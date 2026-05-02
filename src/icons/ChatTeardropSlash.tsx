import { ChatTeardropSlashIcon as ChatTeardropSlashBoldIcon } from "../bold/ChatTeardropSlash";
import { ChatTeardropSlashIcon as ChatTeardropSlashDuotoneIcon } from "../duotone/ChatTeardropSlash";
import { ChatTeardropSlashIcon as ChatTeardropSlashFillIcon } from "../fill/ChatTeardropSlash";
import { ChatTeardropSlashIcon as ChatTeardropSlashLightIcon } from "../light/ChatTeardropSlash";
import { ChatTeardropSlashIcon as ChatTeardropSlashRegularIcon } from "../regular/ChatTeardropSlash";
import { ChatTeardropSlashIcon as ChatTeardropSlashThinIcon } from "../thin/ChatTeardropSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChatTeardropSlashThinIcon,
	light: ChatTeardropSlashLightIcon,
	regular: ChatTeardropSlashRegularIcon,
	bold: ChatTeardropSlashBoldIcon,
	fill: ChatTeardropSlashFillIcon,
	duotone: ChatTeardropSlashDuotoneIcon,
} as const;

export function ChatTeardropSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChatTeardropSlashIcon as ChatTeardropSlash };
