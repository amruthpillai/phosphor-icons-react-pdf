import { UserListIcon as UserListBoldIcon } from "../bold/UserList";
import { UserListIcon as UserListDuotoneIcon } from "../duotone/UserList";
import { UserListIcon as UserListFillIcon } from "../fill/UserList";
import { UserListIcon as UserListLightIcon } from "../light/UserList";
import { UserListIcon as UserListRegularIcon } from "../regular/UserList";
import { UserListIcon as UserListThinIcon } from "../thin/UserList";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UserListThinIcon,
	light: UserListLightIcon,
	regular: UserListRegularIcon,
	bold: UserListBoldIcon,
	fill: UserListFillIcon,
	duotone: UserListDuotoneIcon,
} as const;

export function UserListIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UserListIcon as UserList };
