import { MagicWandIcon as MagicWandBoldIcon } from "../bold/MagicWand";
import { MagicWandIcon as MagicWandDuotoneIcon } from "../duotone/MagicWand";
import { MagicWandIcon as MagicWandFillIcon } from "../fill/MagicWand";
import { MagicWandIcon as MagicWandLightIcon } from "../light/MagicWand";
import { MagicWandIcon as MagicWandRegularIcon } from "../regular/MagicWand";
import { MagicWandIcon as MagicWandThinIcon } from "../thin/MagicWand";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MagicWandThinIcon,
	light: MagicWandLightIcon,
	regular: MagicWandRegularIcon,
	bold: MagicWandBoldIcon,
	fill: MagicWandFillIcon,
	duotone: MagicWandDuotoneIcon,
} as const;

export function MagicWandIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MagicWandIcon as MagicWand };
