import { PaintBrushBroadIcon as PaintBrushBroadBoldIcon } from "../bold/PaintBrushBroad";
import { PaintBrushBroadIcon as PaintBrushBroadDuotoneIcon } from "../duotone/PaintBrushBroad";
import { PaintBrushBroadIcon as PaintBrushBroadFillIcon } from "../fill/PaintBrushBroad";
import { PaintBrushBroadIcon as PaintBrushBroadLightIcon } from "../light/PaintBrushBroad";
import { PaintBrushBroadIcon as PaintBrushBroadRegularIcon } from "../regular/PaintBrushBroad";
import { PaintBrushBroadIcon as PaintBrushBroadThinIcon } from "../thin/PaintBrushBroad";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PaintBrushBroadThinIcon,
	light: PaintBrushBroadLightIcon,
	regular: PaintBrushBroadRegularIcon,
	bold: PaintBrushBroadBoldIcon,
	fill: PaintBrushBroadFillIcon,
	duotone: PaintBrushBroadDuotoneIcon,
} as const;

export function PaintBrushBroadIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PaintBrushBroadIcon as PaintBrushBroad };
