import { CameraIcon as CameraBoldIcon } from "../bold/Camera";
import { CameraIcon as CameraDuotoneIcon } from "../duotone/Camera";
import { CameraIcon as CameraFillIcon } from "../fill/Camera";
import { CameraIcon as CameraLightIcon } from "../light/Camera";
import { CameraIcon as CameraRegularIcon } from "../regular/Camera";
import { CameraIcon as CameraThinIcon } from "../thin/Camera";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CameraThinIcon,
	light: CameraLightIcon,
	regular: CameraRegularIcon,
	bold: CameraBoldIcon,
	fill: CameraFillIcon,
	duotone: CameraDuotoneIcon,
} as const;

export function CameraIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CameraIcon as Camera };
