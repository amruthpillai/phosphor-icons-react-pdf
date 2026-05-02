import { SmileyBlankIcon as SmileyBlankBoldIcon } from "../bold/SmileyBlank";
import { SmileyBlankIcon as SmileyBlankDuotoneIcon } from "../duotone/SmileyBlank";
import { SmileyBlankIcon as SmileyBlankFillIcon } from "../fill/SmileyBlank";
import { SmileyBlankIcon as SmileyBlankLightIcon } from "../light/SmileyBlank";
import { SmileyBlankIcon as SmileyBlankRegularIcon } from "../regular/SmileyBlank";
import { SmileyBlankIcon as SmileyBlankThinIcon } from "../thin/SmileyBlank";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SmileyBlankThinIcon,
	light: SmileyBlankLightIcon,
	regular: SmileyBlankRegularIcon,
	bold: SmileyBlankBoldIcon,
	fill: SmileyBlankFillIcon,
	duotone: SmileyBlankDuotoneIcon,
} as const;

export function SmileyBlankIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SmileyBlankIcon as SmileyBlank };
