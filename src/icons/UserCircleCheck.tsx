import { UserCircleCheckIcon as UserCircleCheckBoldIcon } from "../bold/UserCircleCheck";
import { UserCircleCheckIcon as UserCircleCheckDuotoneIcon } from "../duotone/UserCircleCheck";
import { UserCircleCheckIcon as UserCircleCheckFillIcon } from "../fill/UserCircleCheck";
import { UserCircleCheckIcon as UserCircleCheckLightIcon } from "../light/UserCircleCheck";
import { UserCircleCheckIcon as UserCircleCheckRegularIcon } from "../regular/UserCircleCheck";
import { UserCircleCheckIcon as UserCircleCheckThinIcon } from "../thin/UserCircleCheck";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UserCircleCheckThinIcon,
	light: UserCircleCheckLightIcon,
	regular: UserCircleCheckRegularIcon,
	bold: UserCircleCheckBoldIcon,
	fill: UserCircleCheckFillIcon,
	duotone: UserCircleCheckDuotoneIcon,
} as const;

export function UserCircleCheckIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UserCircleCheckIcon as UserCircleCheck };
