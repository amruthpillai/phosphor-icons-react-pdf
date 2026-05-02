import { PokerChipIcon as PokerChipBoldIcon } from "../bold/PokerChip";
import { PokerChipIcon as PokerChipDuotoneIcon } from "../duotone/PokerChip";
import { PokerChipIcon as PokerChipFillIcon } from "../fill/PokerChip";
import { PokerChipIcon as PokerChipLightIcon } from "../light/PokerChip";
import { PokerChipIcon as PokerChipRegularIcon } from "../regular/PokerChip";
import { PokerChipIcon as PokerChipThinIcon } from "../thin/PokerChip";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PokerChipThinIcon,
	light: PokerChipLightIcon,
	regular: PokerChipRegularIcon,
	bold: PokerChipBoldIcon,
	fill: PokerChipFillIcon,
	duotone: PokerChipDuotoneIcon,
} as const;

export function PokerChipIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PokerChipIcon as PokerChip };
