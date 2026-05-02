import { ChatsTeardropIcon as ChatsTeardropBoldIcon } from "../bold/ChatsTeardrop";
import { ChatsTeardropIcon as ChatsTeardropDuotoneIcon } from "../duotone/ChatsTeardrop";
import { ChatsTeardropIcon as ChatsTeardropFillIcon } from "../fill/ChatsTeardrop";
import { ChatsTeardropIcon as ChatsTeardropLightIcon } from "../light/ChatsTeardrop";
import { ChatsTeardropIcon as ChatsTeardropRegularIcon } from "../regular/ChatsTeardrop";
import { ChatsTeardropIcon as ChatsTeardropThinIcon } from "../thin/ChatsTeardrop";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChatsTeardropThinIcon,
	light: ChatsTeardropLightIcon,
	regular: ChatsTeardropRegularIcon,
	bold: ChatsTeardropBoldIcon,
	fill: ChatsTeardropFillIcon,
	duotone: ChatsTeardropDuotoneIcon,
} as const;

export function ChatsTeardropIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChatsTeardropIcon as ChatsTeardrop };
