import { FileJsxIcon as FileJsxBoldIcon } from "../bold/FileJsx";
import { FileJsxIcon as FileJsxDuotoneIcon } from "../duotone/FileJsx";
import { FileJsxIcon as FileJsxFillIcon } from "../fill/FileJsx";
import { FileJsxIcon as FileJsxLightIcon } from "../light/FileJsx";
import { FileJsxIcon as FileJsxRegularIcon } from "../regular/FileJsx";
import { FileJsxIcon as FileJsxThinIcon } from "../thin/FileJsx";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileJsxThinIcon,
	light: FileJsxLightIcon,
	regular: FileJsxRegularIcon,
	bold: FileJsxBoldIcon,
	fill: FileJsxFillIcon,
	duotone: FileJsxDuotoneIcon,
} as const;

export function FileJsxIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileJsxIcon as FileJsx };
