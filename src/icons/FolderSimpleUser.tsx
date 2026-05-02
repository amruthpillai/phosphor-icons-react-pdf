import { FolderSimpleUserIcon as FolderSimpleUserBoldIcon } from "../bold/FolderSimpleUser";
import { FolderSimpleUserIcon as FolderSimpleUserDuotoneIcon } from "../duotone/FolderSimpleUser";
import { FolderSimpleUserIcon as FolderSimpleUserFillIcon } from "../fill/FolderSimpleUser";
import { FolderSimpleUserIcon as FolderSimpleUserLightIcon } from "../light/FolderSimpleUser";
import { FolderSimpleUserIcon as FolderSimpleUserRegularIcon } from "../regular/FolderSimpleUser";
import { FolderSimpleUserIcon as FolderSimpleUserThinIcon } from "../thin/FolderSimpleUser";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FolderSimpleUserThinIcon,
	light: FolderSimpleUserLightIcon,
	regular: FolderSimpleUserRegularIcon,
	bold: FolderSimpleUserBoldIcon,
	fill: FolderSimpleUserFillIcon,
	duotone: FolderSimpleUserDuotoneIcon,
} as const;

export function FolderSimpleUserIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FolderSimpleUserIcon as FolderSimpleUser };
