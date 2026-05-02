import { FolderUserIcon as FolderUserBoldIcon } from "../bold/FolderUser";
import { FolderUserIcon as FolderUserDuotoneIcon } from "../duotone/FolderUser";
import { FolderUserIcon as FolderUserFillIcon } from "../fill/FolderUser";
import { FolderUserIcon as FolderUserLightIcon } from "../light/FolderUser";
import { FolderUserIcon as FolderUserRegularIcon } from "../regular/FolderUser";
import { FolderUserIcon as FolderUserThinIcon } from "../thin/FolderUser";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FolderUserThinIcon,
	light: FolderUserLightIcon,
	regular: FolderUserRegularIcon,
	bold: FolderUserBoldIcon,
	fill: FolderUserFillIcon,
	duotone: FolderUserDuotoneIcon,
} as const;

export function FolderUserIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FolderUserIcon as FolderUser };
