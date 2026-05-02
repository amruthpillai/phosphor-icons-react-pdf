import { UserCheckIcon as UserCheckBoldIcon } from "../bold/UserCheck";
import { UserCheckIcon as UserCheckDuotoneIcon } from "../duotone/UserCheck";
import { UserCheckIcon as UserCheckFillIcon } from "../fill/UserCheck";
import { UserCheckIcon as UserCheckLightIcon } from "../light/UserCheck";
import { UserCheckIcon as UserCheckRegularIcon } from "../regular/UserCheck";
import { UserCheckIcon as UserCheckThinIcon } from "../thin/UserCheck";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UserCheckThinIcon,
	light: UserCheckLightIcon,
	regular: UserCheckRegularIcon,
	bold: UserCheckBoldIcon,
	fill: UserCheckFillIcon,
	duotone: UserCheckDuotoneIcon,
} as const;

export function UserCheckIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UserCheckIcon as UserCheck };
