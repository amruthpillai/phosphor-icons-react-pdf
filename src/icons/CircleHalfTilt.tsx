import { CircleHalfTiltIcon as CircleHalfTiltBoldIcon } from "../bold/CircleHalfTilt";
import { CircleHalfTiltIcon as CircleHalfTiltDuotoneIcon } from "../duotone/CircleHalfTilt";
import { CircleHalfTiltIcon as CircleHalfTiltFillIcon } from "../fill/CircleHalfTilt";
import { CircleHalfTiltIcon as CircleHalfTiltLightIcon } from "../light/CircleHalfTilt";
import { CircleHalfTiltIcon as CircleHalfTiltRegularIcon } from "../regular/CircleHalfTilt";
import { CircleHalfTiltIcon as CircleHalfTiltThinIcon } from "../thin/CircleHalfTilt";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CircleHalfTiltThinIcon,
	light: CircleHalfTiltLightIcon,
	regular: CircleHalfTiltRegularIcon,
	bold: CircleHalfTiltBoldIcon,
	fill: CircleHalfTiltFillIcon,
	duotone: CircleHalfTiltDuotoneIcon,
} as const;

export function CircleHalfTiltIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CircleHalfTiltIcon as CircleHalfTilt };
