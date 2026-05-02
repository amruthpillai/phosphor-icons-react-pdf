import { ShapesIcon as ShapesBoldIcon } from "../bold/Shapes";
import { ShapesIcon as ShapesDuotoneIcon } from "../duotone/Shapes";
import { ShapesIcon as ShapesFillIcon } from "../fill/Shapes";
import { ShapesIcon as ShapesLightIcon } from "../light/Shapes";
import { ShapesIcon as ShapesRegularIcon } from "../regular/Shapes";
import { ShapesIcon as ShapesThinIcon } from "../thin/Shapes";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShapesThinIcon,
	light: ShapesLightIcon,
	regular: ShapesRegularIcon,
	bold: ShapesBoldIcon,
	fill: ShapesFillIcon,
	duotone: ShapesDuotoneIcon,
} as const;

export function ShapesIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShapesIcon as Shapes };
