import { PaintBrushIcon as PaintBrushBoldIcon } from "../bold/PaintBrush";
import { PaintBrushIcon as PaintBrushDuotoneIcon } from "../duotone/PaintBrush";
import { PaintBrushIcon as PaintBrushFillIcon } from "../fill/PaintBrush";
import { PaintBrushIcon as PaintBrushLightIcon } from "../light/PaintBrush";
import { PaintBrushIcon as PaintBrushRegularIcon } from "../regular/PaintBrush";
import { PaintBrushIcon as PaintBrushThinIcon } from "../thin/PaintBrush";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PaintBrushThinIcon,
	light: PaintBrushLightIcon,
	regular: PaintBrushRegularIcon,
	bold: PaintBrushBoldIcon,
	fill: PaintBrushFillIcon,
	duotone: PaintBrushDuotoneIcon,
} as const;

export function PaintBrushIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PaintBrushIcon as PaintBrush };
