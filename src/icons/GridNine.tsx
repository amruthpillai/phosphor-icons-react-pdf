import { GridNineIcon as GridNineBoldIcon } from "../bold/GridNine";
import { GridNineIcon as GridNineDuotoneIcon } from "../duotone/GridNine";
import { GridNineIcon as GridNineFillIcon } from "../fill/GridNine";
import { GridNineIcon as GridNineLightIcon } from "../light/GridNine";
import { GridNineIcon as GridNineRegularIcon } from "../regular/GridNine";
import { GridNineIcon as GridNineThinIcon } from "../thin/GridNine";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GridNineThinIcon,
	light: GridNineLightIcon,
	regular: GridNineRegularIcon,
	bold: GridNineBoldIcon,
	fill: GridNineFillIcon,
	duotone: GridNineDuotoneIcon,
} as const;

export function GridNineIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GridNineIcon as GridNine };
