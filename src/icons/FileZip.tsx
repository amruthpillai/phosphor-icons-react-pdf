import { FileZipIcon as FileZipBoldIcon } from "../bold/FileZip";
import { FileZipIcon as FileZipDuotoneIcon } from "../duotone/FileZip";
import { FileZipIcon as FileZipFillIcon } from "../fill/FileZip";
import { FileZipIcon as FileZipLightIcon } from "../light/FileZip";
import { FileZipIcon as FileZipRegularIcon } from "../regular/FileZip";
import { FileZipIcon as FileZipThinIcon } from "../thin/FileZip";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileZipThinIcon,
	light: FileZipLightIcon,
	regular: FileZipRegularIcon,
	bold: FileZipBoldIcon,
	fill: FileZipFillIcon,
	duotone: FileZipDuotoneIcon,
} as const;

export function FileZipIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileZipIcon as FileZip };
