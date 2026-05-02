import { FlowerTulipIcon as FlowerTulipBoldIcon } from "../bold/FlowerTulip";
import { FlowerTulipIcon as FlowerTulipDuotoneIcon } from "../duotone/FlowerTulip";
import { FlowerTulipIcon as FlowerTulipFillIcon } from "../fill/FlowerTulip";
import { FlowerTulipIcon as FlowerTulipLightIcon } from "../light/FlowerTulip";
import { FlowerTulipIcon as FlowerTulipRegularIcon } from "../regular/FlowerTulip";
import { FlowerTulipIcon as FlowerTulipThinIcon } from "../thin/FlowerTulip";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FlowerTulipThinIcon,
	light: FlowerTulipLightIcon,
	regular: FlowerTulipRegularIcon,
	bold: FlowerTulipBoldIcon,
	fill: FlowerTulipFillIcon,
	duotone: FlowerTulipDuotoneIcon,
} as const;

export function FlowerTulipIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FlowerTulipIcon as FlowerTulip };
