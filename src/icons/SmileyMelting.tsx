import { SmileyMeltingIcon as SmileyMeltingBoldIcon } from "../bold/SmileyMelting";
import { SmileyMeltingIcon as SmileyMeltingDuotoneIcon } from "../duotone/SmileyMelting";
import { SmileyMeltingIcon as SmileyMeltingFillIcon } from "../fill/SmileyMelting";
import { SmileyMeltingIcon as SmileyMeltingLightIcon } from "../light/SmileyMelting";
import { SmileyMeltingIcon as SmileyMeltingRegularIcon } from "../regular/SmileyMelting";
import { SmileyMeltingIcon as SmileyMeltingThinIcon } from "../thin/SmileyMelting";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SmileyMeltingThinIcon,
	light: SmileyMeltingLightIcon,
	regular: SmileyMeltingRegularIcon,
	bold: SmileyMeltingBoldIcon,
	fill: SmileyMeltingFillIcon,
	duotone: SmileyMeltingDuotoneIcon,
} as const;

export function SmileyMeltingIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SmileyMeltingIcon as SmileyMelting };
