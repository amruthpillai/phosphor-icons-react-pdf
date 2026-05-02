import { FileArrowUpIcon as FileArrowUpBoldIcon } from "../bold/FileArrowUp";
import { FileArrowUpIcon as FileArrowUpDuotoneIcon } from "../duotone/FileArrowUp";
import { FileArrowUpIcon as FileArrowUpFillIcon } from "../fill/FileArrowUp";
import { FileArrowUpIcon as FileArrowUpLightIcon } from "../light/FileArrowUp";
import { FileArrowUpIcon as FileArrowUpRegularIcon } from "../regular/FileArrowUp";
import { FileArrowUpIcon as FileArrowUpThinIcon } from "../thin/FileArrowUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileArrowUpThinIcon,
	light: FileArrowUpLightIcon,
	regular: FileArrowUpRegularIcon,
	bold: FileArrowUpBoldIcon,
	fill: FileArrowUpFillIcon,
	duotone: FileArrowUpDuotoneIcon,
} as const;

export function FileArrowUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileArrowUpIcon as FileArrowUp };
