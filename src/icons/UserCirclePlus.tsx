import { UserCirclePlusIcon as UserCirclePlusBoldIcon } from "../bold/UserCirclePlus";
import { UserCirclePlusIcon as UserCirclePlusDuotoneIcon } from "../duotone/UserCirclePlus";
import { UserCirclePlusIcon as UserCirclePlusFillIcon } from "../fill/UserCirclePlus";
import { UserCirclePlusIcon as UserCirclePlusLightIcon } from "../light/UserCirclePlus";
import { UserCirclePlusIcon as UserCirclePlusRegularIcon } from "../regular/UserCirclePlus";
import { UserCirclePlusIcon as UserCirclePlusThinIcon } from "../thin/UserCirclePlus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UserCirclePlusThinIcon,
	light: UserCirclePlusLightIcon,
	regular: UserCirclePlusRegularIcon,
	bold: UserCirclePlusBoldIcon,
	fill: UserCirclePlusFillIcon,
	duotone: UserCirclePlusDuotoneIcon,
} as const;

export function UserCirclePlusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UserCirclePlusIcon as UserCirclePlus };
