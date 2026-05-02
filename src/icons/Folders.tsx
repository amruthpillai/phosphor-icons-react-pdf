import { FoldersIcon as FoldersBoldIcon } from "../bold/Folders";
import { FoldersIcon as FoldersDuotoneIcon } from "../duotone/Folders";
import { FoldersIcon as FoldersFillIcon } from "../fill/Folders";
import { FoldersIcon as FoldersLightIcon } from "../light/Folders";
import { FoldersIcon as FoldersRegularIcon } from "../regular/Folders";
import { FoldersIcon as FoldersThinIcon } from "../thin/Folders";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FoldersThinIcon,
	light: FoldersLightIcon,
	regular: FoldersRegularIcon,
	bold: FoldersBoldIcon,
	fill: FoldersFillIcon,
	duotone: FoldersDuotoneIcon,
} as const;

export function FoldersIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FoldersIcon as Folders };
