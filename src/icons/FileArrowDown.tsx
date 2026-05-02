import { FileArrowDownIcon as FileArrowDownBoldIcon } from "../bold/FileArrowDown";
import { FileArrowDownIcon as FileArrowDownDuotoneIcon } from "../duotone/FileArrowDown";
import { FileArrowDownIcon as FileArrowDownFillIcon } from "../fill/FileArrowDown";
import { FileArrowDownIcon as FileArrowDownLightIcon } from "../light/FileArrowDown";
import { FileArrowDownIcon as FileArrowDownRegularIcon } from "../regular/FileArrowDown";
import { FileArrowDownIcon as FileArrowDownThinIcon } from "../thin/FileArrowDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileArrowDownThinIcon,
	light: FileArrowDownLightIcon,
	regular: FileArrowDownRegularIcon,
	bold: FileArrowDownBoldIcon,
	fill: FileArrowDownFillIcon,
	duotone: FileArrowDownDuotoneIcon,
} as const;

export function FileArrowDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileArrowDownIcon as FileArrowDown };
