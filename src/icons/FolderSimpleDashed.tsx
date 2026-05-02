import { FolderSimpleDashedIcon as FolderSimpleDashedBoldIcon } from "../bold/FolderSimpleDashed";
import { FolderSimpleDashedIcon as FolderSimpleDashedDuotoneIcon } from "../duotone/FolderSimpleDashed";
import { FolderSimpleDashedIcon as FolderSimpleDashedFillIcon } from "../fill/FolderSimpleDashed";
import { FolderSimpleDashedIcon as FolderSimpleDashedLightIcon } from "../light/FolderSimpleDashed";
import { FolderSimpleDashedIcon as FolderSimpleDashedRegularIcon } from "../regular/FolderSimpleDashed";
import { FolderSimpleDashedIcon as FolderSimpleDashedThinIcon } from "../thin/FolderSimpleDashed";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FolderSimpleDashedThinIcon,
	light: FolderSimpleDashedLightIcon,
	regular: FolderSimpleDashedRegularIcon,
	bold: FolderSimpleDashedBoldIcon,
	fill: FolderSimpleDashedFillIcon,
	duotone: FolderSimpleDashedDuotoneIcon,
} as const;

export function FolderSimpleDashedIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FolderSimpleDashedIcon as FolderSimpleDashed };
