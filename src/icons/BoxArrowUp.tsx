import { BoxArrowUpIcon as BoxArrowUpBoldIcon } from "../bold/BoxArrowUp";
import { BoxArrowUpIcon as BoxArrowUpDuotoneIcon } from "../duotone/BoxArrowUp";
import { BoxArrowUpIcon as BoxArrowUpFillIcon } from "../fill/BoxArrowUp";
import { BoxArrowUpIcon as BoxArrowUpLightIcon } from "../light/BoxArrowUp";
import { BoxArrowUpIcon as BoxArrowUpRegularIcon } from "../regular/BoxArrowUp";
import { BoxArrowUpIcon as BoxArrowUpThinIcon } from "../thin/BoxArrowUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BoxArrowUpThinIcon,
	light: BoxArrowUpLightIcon,
	regular: BoxArrowUpRegularIcon,
	bold: BoxArrowUpBoldIcon,
	fill: BoxArrowUpFillIcon,
	duotone: BoxArrowUpDuotoneIcon,
} as const;

export function BoxArrowUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BoxArrowUpIcon as BoxArrowUp };
