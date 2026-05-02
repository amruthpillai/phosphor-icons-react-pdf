import { FolderOpenIcon as FolderOpenBoldIcon } from "../bold/FolderOpen";
import { FolderOpenIcon as FolderOpenDuotoneIcon } from "../duotone/FolderOpen";
import { FolderOpenIcon as FolderOpenFillIcon } from "../fill/FolderOpen";
import { FolderOpenIcon as FolderOpenLightIcon } from "../light/FolderOpen";
import { FolderOpenIcon as FolderOpenRegularIcon } from "../regular/FolderOpen";
import { FolderOpenIcon as FolderOpenThinIcon } from "../thin/FolderOpen";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FolderOpenThinIcon,
	light: FolderOpenLightIcon,
	regular: FolderOpenRegularIcon,
	bold: FolderOpenBoldIcon,
	fill: FolderOpenFillIcon,
	duotone: FolderOpenDuotoneIcon,
} as const;

export function FolderOpenIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FolderOpenIcon as FolderOpen };
