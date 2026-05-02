import { FolderLockIcon as FolderLockBoldIcon } from "../bold/FolderLock";
import { FolderLockIcon as FolderLockDuotoneIcon } from "../duotone/FolderLock";
import { FolderLockIcon as FolderLockFillIcon } from "../fill/FolderLock";
import { FolderLockIcon as FolderLockLightIcon } from "../light/FolderLock";
import { FolderLockIcon as FolderLockRegularIcon } from "../regular/FolderLock";
import { FolderLockIcon as FolderLockThinIcon } from "../thin/FolderLock";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FolderLockThinIcon,
	light: FolderLockLightIcon,
	regular: FolderLockRegularIcon,
	bold: FolderLockBoldIcon,
	fill: FolderLockFillIcon,
	duotone: FolderLockDuotoneIcon,
} as const;

export function FolderLockIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FolderLockIcon as FolderLock };
