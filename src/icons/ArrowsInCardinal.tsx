import { ArrowsInCardinalIcon as ArrowsInCardinalBoldIcon } from "../bold/ArrowsInCardinal";
import { ArrowsInCardinalIcon as ArrowsInCardinalDuotoneIcon } from "../duotone/ArrowsInCardinal";
import { ArrowsInCardinalIcon as ArrowsInCardinalFillIcon } from "../fill/ArrowsInCardinal";
import { ArrowsInCardinalIcon as ArrowsInCardinalLightIcon } from "../light/ArrowsInCardinal";
import { ArrowsInCardinalIcon as ArrowsInCardinalRegularIcon } from "../regular/ArrowsInCardinal";
import { ArrowsInCardinalIcon as ArrowsInCardinalThinIcon } from "../thin/ArrowsInCardinal";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowsInCardinalThinIcon,
	light: ArrowsInCardinalLightIcon,
	regular: ArrowsInCardinalRegularIcon,
	bold: ArrowsInCardinalBoldIcon,
	fill: ArrowsInCardinalFillIcon,
	duotone: ArrowsInCardinalDuotoneIcon,
} as const;

export function ArrowsInCardinalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowsInCardinalIcon as ArrowsInCardinal };
