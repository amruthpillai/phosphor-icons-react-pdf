import { UserCircleMinusIcon as UserCircleMinusBoldIcon } from "../bold/UserCircleMinus";
import { UserCircleMinusIcon as UserCircleMinusDuotoneIcon } from "../duotone/UserCircleMinus";
import { UserCircleMinusIcon as UserCircleMinusFillIcon } from "../fill/UserCircleMinus";
import { UserCircleMinusIcon as UserCircleMinusLightIcon } from "../light/UserCircleMinus";
import { UserCircleMinusIcon as UserCircleMinusRegularIcon } from "../regular/UserCircleMinus";
import { UserCircleMinusIcon as UserCircleMinusThinIcon } from "../thin/UserCircleMinus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UserCircleMinusThinIcon,
	light: UserCircleMinusLightIcon,
	regular: UserCircleMinusRegularIcon,
	bold: UserCircleMinusBoldIcon,
	fill: UserCircleMinusFillIcon,
	duotone: UserCircleMinusDuotoneIcon,
} as const;

export function UserCircleMinusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UserCircleMinusIcon as UserCircleMinus };
