import { UserIcon as UserBoldIcon } from "../bold/User";
import { UserIcon as UserDuotoneIcon } from "../duotone/User";
import { UserIcon as UserFillIcon } from "../fill/User";
import { UserIcon as UserLightIcon } from "../light/User";
import { UserIcon as UserRegularIcon } from "../regular/User";
import { UserIcon as UserThinIcon } from "../thin/User";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UserThinIcon,
	light: UserLightIcon,
	regular: UserRegularIcon,
	bold: UserBoldIcon,
	fill: UserFillIcon,
	duotone: UserDuotoneIcon,
} as const;

export function UserIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UserIcon as User };
