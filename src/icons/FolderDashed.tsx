import { FolderDashedIcon as FolderDashedBoldIcon } from "../bold/FolderDashed";
import { FolderDashedIcon as FolderDashedDuotoneIcon } from "../duotone/FolderDashed";
import { FolderDashedIcon as FolderDashedFillIcon } from "../fill/FolderDashed";
import { FolderDashedIcon as FolderDashedLightIcon } from "../light/FolderDashed";
import { FolderDashedIcon as FolderDashedRegularIcon } from "../regular/FolderDashed";
import { FolderDashedIcon as FolderDashedThinIcon } from "../thin/FolderDashed";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FolderDashedThinIcon,
	light: FolderDashedLightIcon,
	regular: FolderDashedRegularIcon,
	bold: FolderDashedBoldIcon,
	fill: FolderDashedFillIcon,
	duotone: FolderDashedDuotoneIcon,
} as const;

export function FolderDashedIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FolderDashedIcon as FolderDashed };
