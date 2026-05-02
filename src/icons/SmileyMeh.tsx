import { SmileyMehIcon as SmileyMehBoldIcon } from "../bold/SmileyMeh";
import { SmileyMehIcon as SmileyMehDuotoneIcon } from "../duotone/SmileyMeh";
import { SmileyMehIcon as SmileyMehFillIcon } from "../fill/SmileyMeh";
import { SmileyMehIcon as SmileyMehLightIcon } from "../light/SmileyMeh";
import { SmileyMehIcon as SmileyMehRegularIcon } from "../regular/SmileyMeh";
import { SmileyMehIcon as SmileyMehThinIcon } from "../thin/SmileyMeh";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SmileyMehThinIcon,
	light: SmileyMehLightIcon,
	regular: SmileyMehRegularIcon,
	bold: SmileyMehBoldIcon,
	fill: SmileyMehFillIcon,
	duotone: SmileyMehDuotoneIcon,
} as const;

export function SmileyMehIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SmileyMehIcon as SmileyMeh };
