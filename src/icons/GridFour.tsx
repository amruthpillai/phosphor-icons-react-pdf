import { GridFourIcon as GridFourBoldIcon } from "../bold/GridFour";
import { GridFourIcon as GridFourDuotoneIcon } from "../duotone/GridFour";
import { GridFourIcon as GridFourFillIcon } from "../fill/GridFour";
import { GridFourIcon as GridFourLightIcon } from "../light/GridFour";
import { GridFourIcon as GridFourRegularIcon } from "../regular/GridFour";
import { GridFourIcon as GridFourThinIcon } from "../thin/GridFour";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GridFourThinIcon,
	light: GridFourLightIcon,
	regular: GridFourRegularIcon,
	bold: GridFourBoldIcon,
	fill: GridFourFillIcon,
	duotone: GridFourDuotoneIcon,
} as const;

export function GridFourIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GridFourIcon as GridFour };
