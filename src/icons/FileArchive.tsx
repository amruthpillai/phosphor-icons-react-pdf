import { FileArchiveIcon as FileArchiveBoldIcon } from "../bold/FileArchive";
import { FileArchiveIcon as FileArchiveDuotoneIcon } from "../duotone/FileArchive";
import { FileArchiveIcon as FileArchiveFillIcon } from "../fill/FileArchive";
import { FileArchiveIcon as FileArchiveLightIcon } from "../light/FileArchive";
import { FileArchiveIcon as FileArchiveRegularIcon } from "../regular/FileArchive";
import { FileArchiveIcon as FileArchiveThinIcon } from "../thin/FileArchive";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileArchiveThinIcon,
	light: FileArchiveLightIcon,
	regular: FileArchiveRegularIcon,
	bold: FileArchiveBoldIcon,
	fill: FileArchiveFillIcon,
	duotone: FileArchiveDuotoneIcon,
} as const;

export function FileArchiveIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileArchiveIcon as FileArchive };
