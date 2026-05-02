import { ShootingStarIcon as ShootingStarBoldIcon } from "../bold/ShootingStar";
import { ShootingStarIcon as ShootingStarDuotoneIcon } from "../duotone/ShootingStar";
import { ShootingStarIcon as ShootingStarFillIcon } from "../fill/ShootingStar";
import { ShootingStarIcon as ShootingStarLightIcon } from "../light/ShootingStar";
import { ShootingStarIcon as ShootingStarRegularIcon } from "../regular/ShootingStar";
import { ShootingStarIcon as ShootingStarThinIcon } from "../thin/ShootingStar";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShootingStarThinIcon,
	light: ShootingStarLightIcon,
	regular: ShootingStarRegularIcon,
	bold: ShootingStarBoldIcon,
	fill: ShootingStarFillIcon,
	duotone: ShootingStarDuotoneIcon,
} as const;

export function ShootingStarIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShootingStarIcon as ShootingStar };
