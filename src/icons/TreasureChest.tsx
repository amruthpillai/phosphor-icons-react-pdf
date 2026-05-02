import { TreasureChestIcon as TreasureChestBoldIcon } from "../bold/TreasureChest";
import { TreasureChestIcon as TreasureChestDuotoneIcon } from "../duotone/TreasureChest";
import { TreasureChestIcon as TreasureChestFillIcon } from "../fill/TreasureChest";
import { TreasureChestIcon as TreasureChestLightIcon } from "../light/TreasureChest";
import { TreasureChestIcon as TreasureChestRegularIcon } from "../regular/TreasureChest";
import { TreasureChestIcon as TreasureChestThinIcon } from "../thin/TreasureChest";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TreasureChestThinIcon,
	light: TreasureChestLightIcon,
	regular: TreasureChestRegularIcon,
	bold: TreasureChestBoldIcon,
	fill: TreasureChestFillIcon,
	duotone: TreasureChestDuotoneIcon,
} as const;

export function TreasureChestIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TreasureChestIcon as TreasureChest };
