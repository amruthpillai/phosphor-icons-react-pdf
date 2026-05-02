import { ShieldStarIcon as ShieldStarBoldIcon } from "../bold/ShieldStar";
import { ShieldStarIcon as ShieldStarDuotoneIcon } from "../duotone/ShieldStar";
import { ShieldStarIcon as ShieldStarFillIcon } from "../fill/ShieldStar";
import { ShieldStarIcon as ShieldStarLightIcon } from "../light/ShieldStar";
import { ShieldStarIcon as ShieldStarRegularIcon } from "../regular/ShieldStar";
import { ShieldStarIcon as ShieldStarThinIcon } from "../thin/ShieldStar";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShieldStarThinIcon,
	light: ShieldStarLightIcon,
	regular: ShieldStarRegularIcon,
	bold: ShieldStarBoldIcon,
	fill: ShieldStarFillIcon,
	duotone: ShieldStarDuotoneIcon,
} as const;

export function ShieldStarIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShieldStarIcon as ShieldStar };
