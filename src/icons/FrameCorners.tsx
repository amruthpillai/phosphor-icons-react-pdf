import { FrameCornersIcon as FrameCornersBoldIcon } from "../bold/FrameCorners";
import { FrameCornersIcon as FrameCornersDuotoneIcon } from "../duotone/FrameCorners";
import { FrameCornersIcon as FrameCornersFillIcon } from "../fill/FrameCorners";
import { FrameCornersIcon as FrameCornersLightIcon } from "../light/FrameCorners";
import { FrameCornersIcon as FrameCornersRegularIcon } from "../regular/FrameCorners";
import { FrameCornersIcon as FrameCornersThinIcon } from "../thin/FrameCorners";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FrameCornersThinIcon,
	light: FrameCornersLightIcon,
	regular: FrameCornersRegularIcon,
	bold: FrameCornersBoldIcon,
	fill: FrameCornersFillIcon,
	duotone: FrameCornersDuotoneIcon,
} as const;

export function FrameCornersIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FrameCornersIcon as FrameCorners };
