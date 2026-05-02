import { ChairIcon as ChairBoldIcon } from "../bold/Chair";
import { ChairIcon as ChairDuotoneIcon } from "../duotone/Chair";
import { ChairIcon as ChairFillIcon } from "../fill/Chair";
import { ChairIcon as ChairLightIcon } from "../light/Chair";
import { ChairIcon as ChairRegularIcon } from "../regular/Chair";
import { ChairIcon as ChairThinIcon } from "../thin/Chair";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChairThinIcon,
	light: ChairLightIcon,
	regular: ChairRegularIcon,
	bold: ChairBoldIcon,
	fill: ChairFillIcon,
	duotone: ChairDuotoneIcon,
} as const;

export function ChairIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChairIcon as Chair };
