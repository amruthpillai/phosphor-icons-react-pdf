import { SmileyWinkIcon as SmileyWinkBoldIcon } from "../bold/SmileyWink";
import { SmileyWinkIcon as SmileyWinkDuotoneIcon } from "../duotone/SmileyWink";
import { SmileyWinkIcon as SmileyWinkFillIcon } from "../fill/SmileyWink";
import { SmileyWinkIcon as SmileyWinkLightIcon } from "../light/SmileyWink";
import { SmileyWinkIcon as SmileyWinkRegularIcon } from "../regular/SmileyWink";
import { SmileyWinkIcon as SmileyWinkThinIcon } from "../thin/SmileyWink";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SmileyWinkThinIcon,
	light: SmileyWinkLightIcon,
	regular: SmileyWinkRegularIcon,
	bold: SmileyWinkBoldIcon,
	fill: SmileyWinkFillIcon,
	duotone: SmileyWinkDuotoneIcon,
} as const;

export function SmileyWinkIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SmileyWinkIcon as SmileyWink };
