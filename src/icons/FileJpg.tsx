import { FileJpgIcon as FileJpgBoldIcon } from "../bold/FileJpg";
import { FileJpgIcon as FileJpgDuotoneIcon } from "../duotone/FileJpg";
import { FileJpgIcon as FileJpgFillIcon } from "../fill/FileJpg";
import { FileJpgIcon as FileJpgLightIcon } from "../light/FileJpg";
import { FileJpgIcon as FileJpgRegularIcon } from "../regular/FileJpg";
import { FileJpgIcon as FileJpgThinIcon } from "../thin/FileJpg";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileJpgThinIcon,
	light: FileJpgLightIcon,
	regular: FileJpgRegularIcon,
	bold: FileJpgBoldIcon,
	fill: FileJpgFillIcon,
	duotone: FileJpgDuotoneIcon,
} as const;

export function FileJpgIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileJpgIcon as FileJpg };
