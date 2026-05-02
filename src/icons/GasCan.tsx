import { GasCanIcon as GasCanBoldIcon } from "../bold/GasCan";
import { GasCanIcon as GasCanDuotoneIcon } from "../duotone/GasCan";
import { GasCanIcon as GasCanFillIcon } from "../fill/GasCan";
import { GasCanIcon as GasCanLightIcon } from "../light/GasCan";
import { GasCanIcon as GasCanRegularIcon } from "../regular/GasCan";
import { GasCanIcon as GasCanThinIcon } from "../thin/GasCan";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GasCanThinIcon,
	light: GasCanLightIcon,
	regular: GasCanRegularIcon,
	bold: GasCanBoldIcon,
	fill: GasCanFillIcon,
	duotone: GasCanDuotoneIcon,
} as const;

export function GasCanIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GasCanIcon as GasCan };
