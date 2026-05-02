import { SmileyAngryIcon as SmileyAngryBoldIcon } from "../bold/SmileyAngry";
import { SmileyAngryIcon as SmileyAngryDuotoneIcon } from "../duotone/SmileyAngry";
import { SmileyAngryIcon as SmileyAngryFillIcon } from "../fill/SmileyAngry";
import { SmileyAngryIcon as SmileyAngryLightIcon } from "../light/SmileyAngry";
import { SmileyAngryIcon as SmileyAngryRegularIcon } from "../regular/SmileyAngry";
import { SmileyAngryIcon as SmileyAngryThinIcon } from "../thin/SmileyAngry";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SmileyAngryThinIcon,
	light: SmileyAngryLightIcon,
	regular: SmileyAngryRegularIcon,
	bold: SmileyAngryBoldIcon,
	fill: SmileyAngryFillIcon,
	duotone: SmileyAngryDuotoneIcon,
} as const;

export function SmileyAngryIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SmileyAngryIcon as SmileyAngry };
