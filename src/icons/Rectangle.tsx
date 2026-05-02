import { RectangleIcon as RectangleBoldIcon } from "../bold/Rectangle";
import { RectangleIcon as RectangleDuotoneIcon } from "../duotone/Rectangle";
import { RectangleIcon as RectangleFillIcon } from "../fill/Rectangle";
import { RectangleIcon as RectangleLightIcon } from "../light/Rectangle";
import { RectangleIcon as RectangleRegularIcon } from "../regular/Rectangle";
import { RectangleIcon as RectangleThinIcon } from "../thin/Rectangle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RectangleThinIcon,
	light: RectangleLightIcon,
	regular: RectangleRegularIcon,
	bold: RectangleBoldIcon,
	fill: RectangleFillIcon,
	duotone: RectangleDuotoneIcon,
} as const;

export function RectangleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RectangleIcon as Rectangle };
