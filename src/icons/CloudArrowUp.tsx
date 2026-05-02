import { CloudArrowUpIcon as CloudArrowUpBoldIcon } from "../bold/CloudArrowUp";
import { CloudArrowUpIcon as CloudArrowUpDuotoneIcon } from "../duotone/CloudArrowUp";
import { CloudArrowUpIcon as CloudArrowUpFillIcon } from "../fill/CloudArrowUp";
import { CloudArrowUpIcon as CloudArrowUpLightIcon } from "../light/CloudArrowUp";
import { CloudArrowUpIcon as CloudArrowUpRegularIcon } from "../regular/CloudArrowUp";
import { CloudArrowUpIcon as CloudArrowUpThinIcon } from "../thin/CloudArrowUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CloudArrowUpThinIcon,
	light: CloudArrowUpLightIcon,
	regular: CloudArrowUpRegularIcon,
	bold: CloudArrowUpBoldIcon,
	fill: CloudArrowUpFillIcon,
	duotone: CloudArrowUpDuotoneIcon,
} as const;

export function CloudArrowUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CloudArrowUpIcon as CloudArrowUp };
