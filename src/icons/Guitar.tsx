import { GuitarIcon as GuitarBoldIcon } from "../bold/Guitar";
import { GuitarIcon as GuitarDuotoneIcon } from "../duotone/Guitar";
import { GuitarIcon as GuitarFillIcon } from "../fill/Guitar";
import { GuitarIcon as GuitarLightIcon } from "../light/Guitar";
import { GuitarIcon as GuitarRegularIcon } from "../regular/Guitar";
import { GuitarIcon as GuitarThinIcon } from "../thin/Guitar";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GuitarThinIcon,
	light: GuitarLightIcon,
	regular: GuitarRegularIcon,
	bold: GuitarBoldIcon,
	fill: GuitarFillIcon,
	duotone: GuitarDuotoneIcon,
} as const;

export function GuitarIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GuitarIcon as Guitar };
