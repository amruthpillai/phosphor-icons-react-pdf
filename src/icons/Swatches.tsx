import { SwatchesIcon as SwatchesBoldIcon } from "../bold/Swatches";
import { SwatchesIcon as SwatchesDuotoneIcon } from "../duotone/Swatches";
import { SwatchesIcon as SwatchesFillIcon } from "../fill/Swatches";
import { SwatchesIcon as SwatchesLightIcon } from "../light/Swatches";
import { SwatchesIcon as SwatchesRegularIcon } from "../regular/Swatches";
import { SwatchesIcon as SwatchesThinIcon } from "../thin/Swatches";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SwatchesThinIcon,
	light: SwatchesLightIcon,
	regular: SwatchesRegularIcon,
	bold: SwatchesBoldIcon,
	fill: SwatchesFillIcon,
	duotone: SwatchesDuotoneIcon,
} as const;

export function SwatchesIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SwatchesIcon as Swatches };
