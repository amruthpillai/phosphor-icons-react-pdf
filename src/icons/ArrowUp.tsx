import { ArrowUpIcon as ArrowUpBoldIcon } from "../bold/ArrowUp";
import { ArrowUpIcon as ArrowUpDuotoneIcon } from "../duotone/ArrowUp";
import { ArrowUpIcon as ArrowUpFillIcon } from "../fill/ArrowUp";
import { ArrowUpIcon as ArrowUpLightIcon } from "../light/ArrowUp";
import { ArrowUpIcon as ArrowUpRegularIcon } from "../regular/ArrowUp";
import { ArrowUpIcon as ArrowUpThinIcon } from "../thin/ArrowUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowUpThinIcon,
	light: ArrowUpLightIcon,
	regular: ArrowUpRegularIcon,
	bold: ArrowUpBoldIcon,
	fill: ArrowUpFillIcon,
	duotone: ArrowUpDuotoneIcon,
} as const;

export function ArrowUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowUpIcon as ArrowUp };
