import { UserFocusIcon as UserFocusBoldIcon } from "../bold/UserFocus";
import { UserFocusIcon as UserFocusDuotoneIcon } from "../duotone/UserFocus";
import { UserFocusIcon as UserFocusFillIcon } from "../fill/UserFocus";
import { UserFocusIcon as UserFocusLightIcon } from "../light/UserFocus";
import { UserFocusIcon as UserFocusRegularIcon } from "../regular/UserFocus";
import { UserFocusIcon as UserFocusThinIcon } from "../thin/UserFocus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UserFocusThinIcon,
	light: UserFocusLightIcon,
	regular: UserFocusRegularIcon,
	bold: UserFocusBoldIcon,
	fill: UserFocusFillIcon,
	duotone: UserFocusDuotoneIcon,
} as const;

export function UserFocusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UserFocusIcon as UserFocus };
