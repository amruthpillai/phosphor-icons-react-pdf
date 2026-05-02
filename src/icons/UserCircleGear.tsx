import { UserCircleGearIcon as UserCircleGearBoldIcon } from "../bold/UserCircleGear";
import { UserCircleGearIcon as UserCircleGearDuotoneIcon } from "../duotone/UserCircleGear";
import { UserCircleGearIcon as UserCircleGearFillIcon } from "../fill/UserCircleGear";
import { UserCircleGearIcon as UserCircleGearLightIcon } from "../light/UserCircleGear";
import { UserCircleGearIcon as UserCircleGearRegularIcon } from "../regular/UserCircleGear";
import { UserCircleGearIcon as UserCircleGearThinIcon } from "../thin/UserCircleGear";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UserCircleGearThinIcon,
	light: UserCircleGearLightIcon,
	regular: UserCircleGearRegularIcon,
	bold: UserCircleGearBoldIcon,
	fill: UserCircleGearFillIcon,
	duotone: UserCircleGearDuotoneIcon,
} as const;

export function UserCircleGearIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UserCircleGearIcon as UserCircleGear };
