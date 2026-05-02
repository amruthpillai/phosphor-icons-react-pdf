import { FolderSimpleLockIcon as FolderSimpleLockBoldIcon } from "../bold/FolderSimpleLock";
import { FolderSimpleLockIcon as FolderSimpleLockDuotoneIcon } from "../duotone/FolderSimpleLock";
import { FolderSimpleLockIcon as FolderSimpleLockFillIcon } from "../fill/FolderSimpleLock";
import { FolderSimpleLockIcon as FolderSimpleLockLightIcon } from "../light/FolderSimpleLock";
import { FolderSimpleLockIcon as FolderSimpleLockRegularIcon } from "../regular/FolderSimpleLock";
import { FolderSimpleLockIcon as FolderSimpleLockThinIcon } from "../thin/FolderSimpleLock";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FolderSimpleLockThinIcon,
	light: FolderSimpleLockLightIcon,
	regular: FolderSimpleLockRegularIcon,
	bold: FolderSimpleLockBoldIcon,
	fill: FolderSimpleLockFillIcon,
	duotone: FolderSimpleLockDuotoneIcon,
} as const;

export function FolderSimpleLockIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FolderSimpleLockIcon as FolderSimpleLock };
