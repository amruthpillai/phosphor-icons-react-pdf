import { FolderPlusIcon as FolderPlusBoldIcon } from "../bold/FolderPlus";
import { FolderPlusIcon as FolderPlusDuotoneIcon } from "../duotone/FolderPlus";
import { FolderPlusIcon as FolderPlusFillIcon } from "../fill/FolderPlus";
import { FolderPlusIcon as FolderPlusLightIcon } from "../light/FolderPlus";
import { FolderPlusIcon as FolderPlusRegularIcon } from "../regular/FolderPlus";
import { FolderPlusIcon as FolderPlusThinIcon } from "../thin/FolderPlus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FolderPlusThinIcon,
	light: FolderPlusLightIcon,
	regular: FolderPlusRegularIcon,
	bold: FolderPlusBoldIcon,
	fill: FolderPlusFillIcon,
	duotone: FolderPlusDuotoneIcon,
} as const;

export function FolderPlusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FolderPlusIcon as FolderPlus };
