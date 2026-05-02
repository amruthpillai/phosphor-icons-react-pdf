import { ParallelogramIcon as ParallelogramBoldIcon } from "../bold/Parallelogram";
import { ParallelogramIcon as ParallelogramDuotoneIcon } from "../duotone/Parallelogram";
import { ParallelogramIcon as ParallelogramFillIcon } from "../fill/Parallelogram";
import { ParallelogramIcon as ParallelogramLightIcon } from "../light/Parallelogram";
import { ParallelogramIcon as ParallelogramRegularIcon } from "../regular/Parallelogram";
import { ParallelogramIcon as ParallelogramThinIcon } from "../thin/Parallelogram";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ParallelogramThinIcon,
	light: ParallelogramLightIcon,
	regular: ParallelogramRegularIcon,
	bold: ParallelogramBoldIcon,
	fill: ParallelogramFillIcon,
	duotone: ParallelogramDuotoneIcon,
} as const;

export function ParallelogramIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ParallelogramIcon as Parallelogram };
