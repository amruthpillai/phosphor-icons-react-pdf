import { UserPlusIcon as UserPlusBoldIcon } from "../bold/UserPlus";
import { UserPlusIcon as UserPlusDuotoneIcon } from "../duotone/UserPlus";
import { UserPlusIcon as UserPlusFillIcon } from "../fill/UserPlus";
import { UserPlusIcon as UserPlusLightIcon } from "../light/UserPlus";
import { UserPlusIcon as UserPlusRegularIcon } from "../regular/UserPlus";
import { UserPlusIcon as UserPlusThinIcon } from "../thin/UserPlus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UserPlusThinIcon,
	light: UserPlusLightIcon,
	regular: UserPlusRegularIcon,
	bold: UserPlusBoldIcon,
	fill: UserPlusFillIcon,
	duotone: UserPlusDuotoneIcon,
} as const;

export function UserPlusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UserPlusIcon as UserPlus };
