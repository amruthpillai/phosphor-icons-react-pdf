import { TriangleIcon as TriangleBoldIcon } from "../bold/Triangle";
import { TriangleIcon as TriangleDuotoneIcon } from "../duotone/Triangle";
import { TriangleIcon as TriangleFillIcon } from "../fill/Triangle";
import { TriangleIcon as TriangleLightIcon } from "../light/Triangle";
import { TriangleIcon as TriangleRegularIcon } from "../regular/Triangle";
import { TriangleIcon as TriangleThinIcon } from "../thin/Triangle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TriangleThinIcon,
	light: TriangleLightIcon,
	regular: TriangleRegularIcon,
	bold: TriangleBoldIcon,
	fill: TriangleFillIcon,
	duotone: TriangleDuotoneIcon,
} as const;

export function TriangleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TriangleIcon as Triangle };
