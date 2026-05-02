import { UserGearIcon as UserGearBoldIcon } from "../bold/UserGear";
import { UserGearIcon as UserGearDuotoneIcon } from "../duotone/UserGear";
import { UserGearIcon as UserGearFillIcon } from "../fill/UserGear";
import { UserGearIcon as UserGearLightIcon } from "../light/UserGear";
import { UserGearIcon as UserGearRegularIcon } from "../regular/UserGear";
import { UserGearIcon as UserGearThinIcon } from "../thin/UserGear";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UserGearThinIcon,
	light: UserGearLightIcon,
	regular: UserGearRegularIcon,
	bold: UserGearBoldIcon,
	fill: UserGearFillIcon,
	duotone: UserGearDuotoneIcon,
} as const;

export function UserGearIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UserGearIcon as UserGear };
