import { HandArrowUpIcon as HandArrowUpBoldIcon } from "../bold/HandArrowUp";
import { HandArrowUpIcon as HandArrowUpDuotoneIcon } from "../duotone/HandArrowUp";
import { HandArrowUpIcon as HandArrowUpFillIcon } from "../fill/HandArrowUp";
import { HandArrowUpIcon as HandArrowUpLightIcon } from "../light/HandArrowUp";
import { HandArrowUpIcon as HandArrowUpRegularIcon } from "../regular/HandArrowUp";
import { HandArrowUpIcon as HandArrowUpThinIcon } from "../thin/HandArrowUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandArrowUpThinIcon,
	light: HandArrowUpLightIcon,
	regular: HandArrowUpRegularIcon,
	bold: HandArrowUpBoldIcon,
	fill: HandArrowUpFillIcon,
	duotone: HandArrowUpDuotoneIcon,
} as const;

export function HandArrowUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandArrowUpIcon as HandArrowUp };
