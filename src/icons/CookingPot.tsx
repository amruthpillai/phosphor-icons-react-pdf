import { CookingPotIcon as CookingPotBoldIcon } from "../bold/CookingPot";
import { CookingPotIcon as CookingPotDuotoneIcon } from "../duotone/CookingPot";
import { CookingPotIcon as CookingPotFillIcon } from "../fill/CookingPot";
import { CookingPotIcon as CookingPotLightIcon } from "../light/CookingPot";
import { CookingPotIcon as CookingPotRegularIcon } from "../regular/CookingPot";
import { CookingPotIcon as CookingPotThinIcon } from "../thin/CookingPot";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CookingPotThinIcon,
	light: CookingPotLightIcon,
	regular: CookingPotRegularIcon,
	bold: CookingPotBoldIcon,
	fill: CookingPotFillIcon,
	duotone: CookingPotDuotoneIcon,
} as const;

export function CookingPotIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CookingPotIcon as CookingPot };
