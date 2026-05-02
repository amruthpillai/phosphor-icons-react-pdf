import { FolderSimplePlusIcon as FolderSimplePlusBoldIcon } from "../bold/FolderSimplePlus";
import { FolderSimplePlusIcon as FolderSimplePlusDuotoneIcon } from "../duotone/FolderSimplePlus";
import { FolderSimplePlusIcon as FolderSimplePlusFillIcon } from "../fill/FolderSimplePlus";
import { FolderSimplePlusIcon as FolderSimplePlusLightIcon } from "../light/FolderSimplePlus";
import { FolderSimplePlusIcon as FolderSimplePlusRegularIcon } from "../regular/FolderSimplePlus";
import { FolderSimplePlusIcon as FolderSimplePlusThinIcon } from "../thin/FolderSimplePlus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FolderSimplePlusThinIcon,
	light: FolderSimplePlusLightIcon,
	regular: FolderSimplePlusRegularIcon,
	bold: FolderSimplePlusBoldIcon,
	fill: FolderSimplePlusFillIcon,
	duotone: FolderSimplePlusDuotoneIcon,
} as const;

export function FolderSimplePlusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FolderSimplePlusIcon as FolderSimplePlus };
