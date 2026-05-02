import { UsersIcon as UsersBoldIcon } from "../bold/Users";
import { UsersIcon as UsersDuotoneIcon } from "../duotone/Users";
import { UsersIcon as UsersFillIcon } from "../fill/Users";
import { UsersIcon as UsersLightIcon } from "../light/Users";
import { UsersIcon as UsersRegularIcon } from "../regular/Users";
import { UsersIcon as UsersThinIcon } from "../thin/Users";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UsersThinIcon,
	light: UsersLightIcon,
	regular: UsersRegularIcon,
	bold: UsersBoldIcon,
	fill: UsersFillIcon,
	duotone: UsersDuotoneIcon,
} as const;

export function UsersIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UsersIcon as Users };
