import { FolderIcon as FolderBoldIcon } from "../bold/Folder";
import { FolderIcon as FolderDuotoneIcon } from "../duotone/Folder";
import { FolderIcon as FolderFillIcon } from "../fill/Folder";
import { FolderIcon as FolderLightIcon } from "../light/Folder";
import { FolderIcon as FolderRegularIcon } from "../regular/Folder";
import { FolderIcon as FolderThinIcon } from "../thin/Folder";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FolderThinIcon,
	light: FolderLightIcon,
	regular: FolderRegularIcon,
	bold: FolderBoldIcon,
	fill: FolderFillIcon,
	duotone: FolderDuotoneIcon,
} as const;

export function FolderIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FolderIcon as Folder };
