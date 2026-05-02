import { FileCloudIcon as FileCloudBoldIcon } from "../bold/FileCloud";
import { FileCloudIcon as FileCloudDuotoneIcon } from "../duotone/FileCloud";
import { FileCloudIcon as FileCloudFillIcon } from "../fill/FileCloud";
import { FileCloudIcon as FileCloudLightIcon } from "../light/FileCloud";
import { FileCloudIcon as FileCloudRegularIcon } from "../regular/FileCloud";
import { FileCloudIcon as FileCloudThinIcon } from "../thin/FileCloud";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileCloudThinIcon,
	light: FileCloudLightIcon,
	regular: FileCloudRegularIcon,
	bold: FileCloudBoldIcon,
	fill: FileCloudFillIcon,
	duotone: FileCloudDuotoneIcon,
} as const;

export function FileCloudIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileCloudIcon as FileCloud };
