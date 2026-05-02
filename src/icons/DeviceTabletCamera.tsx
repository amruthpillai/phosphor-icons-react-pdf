import { DeviceTabletCameraIcon as DeviceTabletCameraBoldIcon } from "../bold/DeviceTabletCamera";
import { DeviceTabletCameraIcon as DeviceTabletCameraDuotoneIcon } from "../duotone/DeviceTabletCamera";
import { DeviceTabletCameraIcon as DeviceTabletCameraFillIcon } from "../fill/DeviceTabletCamera";
import { DeviceTabletCameraIcon as DeviceTabletCameraLightIcon } from "../light/DeviceTabletCamera";
import { DeviceTabletCameraIcon as DeviceTabletCameraRegularIcon } from "../regular/DeviceTabletCamera";
import { DeviceTabletCameraIcon as DeviceTabletCameraThinIcon } from "../thin/DeviceTabletCamera";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DeviceTabletCameraThinIcon,
	light: DeviceTabletCameraLightIcon,
	regular: DeviceTabletCameraRegularIcon,
	bold: DeviceTabletCameraBoldIcon,
	fill: DeviceTabletCameraFillIcon,
	duotone: DeviceTabletCameraDuotoneIcon,
} as const;

export function DeviceTabletCameraIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DeviceTabletCameraIcon as DeviceTabletCamera };
