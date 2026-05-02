import { VideoCameraIcon as VideoCameraBoldIcon } from "../bold/VideoCamera";
import { VideoCameraIcon as VideoCameraDuotoneIcon } from "../duotone/VideoCamera";
import { VideoCameraIcon as VideoCameraFillIcon } from "../fill/VideoCamera";
import { VideoCameraIcon as VideoCameraLightIcon } from "../light/VideoCamera";
import { VideoCameraIcon as VideoCameraRegularIcon } from "../regular/VideoCamera";
import { VideoCameraIcon as VideoCameraThinIcon } from "../thin/VideoCamera";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: VideoCameraThinIcon,
	light: VideoCameraLightIcon,
	regular: VideoCameraRegularIcon,
	bold: VideoCameraBoldIcon,
	fill: VideoCameraFillIcon,
	duotone: VideoCameraDuotoneIcon,
} as const;

export function VideoCameraIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { VideoCameraIcon as VideoCamera };
