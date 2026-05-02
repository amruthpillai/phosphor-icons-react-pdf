import { UserMinusIcon as UserMinusBoldIcon } from "../bold/UserMinus";
import { UserMinusIcon as UserMinusDuotoneIcon } from "../duotone/UserMinus";
import { UserMinusIcon as UserMinusFillIcon } from "../fill/UserMinus";
import { UserMinusIcon as UserMinusLightIcon } from "../light/UserMinus";
import { UserMinusIcon as UserMinusRegularIcon } from "../regular/UserMinus";
import { UserMinusIcon as UserMinusThinIcon } from "../thin/UserMinus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UserMinusThinIcon,
	light: UserMinusLightIcon,
	regular: UserMinusRegularIcon,
	bold: UserMinusBoldIcon,
	fill: UserMinusFillIcon,
	duotone: UserMinusDuotoneIcon,
} as const;

export function UserMinusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UserMinusIcon as UserMinus };
