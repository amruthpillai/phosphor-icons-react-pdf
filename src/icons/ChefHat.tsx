import { ChefHatIcon as ChefHatBoldIcon } from "../bold/ChefHat";
import { ChefHatIcon as ChefHatDuotoneIcon } from "../duotone/ChefHat";
import { ChefHatIcon as ChefHatFillIcon } from "../fill/ChefHat";
import { ChefHatIcon as ChefHatLightIcon } from "../light/ChefHat";
import { ChefHatIcon as ChefHatRegularIcon } from "../regular/ChefHat";
import { ChefHatIcon as ChefHatThinIcon } from "../thin/ChefHat";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChefHatThinIcon,
	light: ChefHatLightIcon,
	regular: ChefHatRegularIcon,
	bold: ChefHatBoldIcon,
	fill: ChefHatFillIcon,
	duotone: ChefHatDuotoneIcon,
} as const;

export function ChefHatIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChefHatIcon as ChefHat };
