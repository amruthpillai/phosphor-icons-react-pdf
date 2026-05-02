import { FolderSimpleIcon as FolderSimpleBoldIcon } from "../bold/FolderSimple";
import { FolderSimpleIcon as FolderSimpleDuotoneIcon } from "../duotone/FolderSimple";
import { FolderSimpleIcon as FolderSimpleFillIcon } from "../fill/FolderSimple";
import { FolderSimpleIcon as FolderSimpleLightIcon } from "../light/FolderSimple";
import { FolderSimpleIcon as FolderSimpleRegularIcon } from "../regular/FolderSimple";
import { FolderSimpleIcon as FolderSimpleThinIcon } from "../thin/FolderSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FolderSimpleThinIcon,
	light: FolderSimpleLightIcon,
	regular: FolderSimpleRegularIcon,
	bold: FolderSimpleBoldIcon,
	fill: FolderSimpleFillIcon,
	duotone: FolderSimpleDuotoneIcon,
} as const;

export function FolderSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FolderSimpleIcon as FolderSimple };
