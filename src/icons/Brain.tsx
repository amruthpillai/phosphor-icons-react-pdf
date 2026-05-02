import { BrainIcon as BrainBoldIcon } from "../bold/Brain";
import { BrainIcon as BrainDuotoneIcon } from "../duotone/Brain";
import { BrainIcon as BrainFillIcon } from "../fill/Brain";
import { BrainIcon as BrainLightIcon } from "../light/Brain";
import { BrainIcon as BrainRegularIcon } from "../regular/Brain";
import { BrainIcon as BrainThinIcon } from "../thin/Brain";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BrainThinIcon,
	light: BrainLightIcon,
	regular: BrainRegularIcon,
	bold: BrainBoldIcon,
	fill: BrainFillIcon,
	duotone: BrainDuotoneIcon,
} as const;

export function BrainIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BrainIcon as Brain };
