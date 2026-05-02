import { SmileyIcon as SmileyBoldIcon } from "../bold/Smiley";
import { SmileyIcon as SmileyDuotoneIcon } from "../duotone/Smiley";
import { SmileyIcon as SmileyFillIcon } from "../fill/Smiley";
import { SmileyIcon as SmileyLightIcon } from "../light/Smiley";
import { SmileyIcon as SmileyRegularIcon } from "../regular/Smiley";
import { SmileyIcon as SmileyThinIcon } from "../thin/Smiley";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SmileyThinIcon,
	light: SmileyLightIcon,
	regular: SmileyRegularIcon,
	bold: SmileyBoldIcon,
	fill: SmileyFillIcon,
	duotone: SmileyDuotoneIcon,
} as const;

export function SmileyIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SmileyIcon as Smiley };
