import { UserCircleDashedIcon as UserCircleDashedBoldIcon } from "../bold/UserCircleDashed";
import { UserCircleDashedIcon as UserCircleDashedDuotoneIcon } from "../duotone/UserCircleDashed";
import { UserCircleDashedIcon as UserCircleDashedFillIcon } from "../fill/UserCircleDashed";
import { UserCircleDashedIcon as UserCircleDashedLightIcon } from "../light/UserCircleDashed";
import { UserCircleDashedIcon as UserCircleDashedRegularIcon } from "../regular/UserCircleDashed";
import { UserCircleDashedIcon as UserCircleDashedThinIcon } from "../thin/UserCircleDashed";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UserCircleDashedThinIcon,
	light: UserCircleDashedLightIcon,
	regular: UserCircleDashedRegularIcon,
	bold: UserCircleDashedBoldIcon,
	fill: UserCircleDashedFillIcon,
	duotone: UserCircleDashedDuotoneIcon,
} as const;

export function UserCircleDashedIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UserCircleDashedIcon as UserCircleDashed };
