import { AvocadoIcon as AvocadoBoldIcon } from "../bold/Avocado";
import { AvocadoIcon as AvocadoDuotoneIcon } from "../duotone/Avocado";
import { AvocadoIcon as AvocadoFillIcon } from "../fill/Avocado";
import { AvocadoIcon as AvocadoLightIcon } from "../light/Avocado";
import { AvocadoIcon as AvocadoRegularIcon } from "../regular/Avocado";
import { AvocadoIcon as AvocadoThinIcon } from "../thin/Avocado";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AvocadoThinIcon,
	light: AvocadoLightIcon,
	regular: AvocadoRegularIcon,
	bold: AvocadoBoldIcon,
	fill: AvocadoFillIcon,
	duotone: AvocadoDuotoneIcon,
} as const;

export function AvocadoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AvocadoIcon as Avocado };
