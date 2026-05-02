import { EraserIcon as EraserBoldIcon } from "../bold/Eraser";
import { EraserIcon as EraserDuotoneIcon } from "../duotone/Eraser";
import { EraserIcon as EraserFillIcon } from "../fill/Eraser";
import { EraserIcon as EraserLightIcon } from "../light/Eraser";
import { EraserIcon as EraserRegularIcon } from "../regular/Eraser";
import { EraserIcon as EraserThinIcon } from "../thin/Eraser";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EraserThinIcon,
	light: EraserLightIcon,
	regular: EraserRegularIcon,
	bold: EraserBoldIcon,
	fill: EraserFillIcon,
	duotone: EraserDuotoneIcon,
} as const;

export function EraserIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EraserIcon as Eraser };
