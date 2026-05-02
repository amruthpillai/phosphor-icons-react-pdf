import { UserCircleIcon as UserCircleBoldIcon } from "../bold/UserCircle";
import { UserCircleIcon as UserCircleDuotoneIcon } from "../duotone/UserCircle";
import { UserCircleIcon as UserCircleFillIcon } from "../fill/UserCircle";
import { UserCircleIcon as UserCircleLightIcon } from "../light/UserCircle";
import { UserCircleIcon as UserCircleRegularIcon } from "../regular/UserCircle";
import { UserCircleIcon as UserCircleThinIcon } from "../thin/UserCircle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UserCircleThinIcon,
	light: UserCircleLightIcon,
	regular: UserCircleRegularIcon,
	bold: UserCircleBoldIcon,
	fill: UserCircleFillIcon,
	duotone: UserCircleDuotoneIcon,
} as const;

export function UserCircleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UserCircleIcon as UserCircle };
