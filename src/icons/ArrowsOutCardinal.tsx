import { ArrowsOutCardinalIcon as ArrowsOutCardinalBoldIcon } from "../bold/ArrowsOutCardinal";
import { ArrowsOutCardinalIcon as ArrowsOutCardinalDuotoneIcon } from "../duotone/ArrowsOutCardinal";
import { ArrowsOutCardinalIcon as ArrowsOutCardinalFillIcon } from "../fill/ArrowsOutCardinal";
import { ArrowsOutCardinalIcon as ArrowsOutCardinalLightIcon } from "../light/ArrowsOutCardinal";
import { ArrowsOutCardinalIcon as ArrowsOutCardinalRegularIcon } from "../regular/ArrowsOutCardinal";
import { ArrowsOutCardinalIcon as ArrowsOutCardinalThinIcon } from "../thin/ArrowsOutCardinal";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowsOutCardinalThinIcon,
	light: ArrowsOutCardinalLightIcon,
	regular: ArrowsOutCardinalRegularIcon,
	bold: ArrowsOutCardinalBoldIcon,
	fill: ArrowsOutCardinalFillIcon,
	duotone: ArrowsOutCardinalDuotoneIcon,
} as const;

export function ArrowsOutCardinalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowsOutCardinalIcon as ArrowsOutCardinal };
