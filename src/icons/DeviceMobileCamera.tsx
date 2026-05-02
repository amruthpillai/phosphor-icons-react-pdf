import { DeviceMobileCameraIcon as DeviceMobileCameraBoldIcon } from "../bold/DeviceMobileCamera";
import { DeviceMobileCameraIcon as DeviceMobileCameraDuotoneIcon } from "../duotone/DeviceMobileCamera";
import { DeviceMobileCameraIcon as DeviceMobileCameraFillIcon } from "../fill/DeviceMobileCamera";
import { DeviceMobileCameraIcon as DeviceMobileCameraLightIcon } from "../light/DeviceMobileCamera";
import { DeviceMobileCameraIcon as DeviceMobileCameraRegularIcon } from "../regular/DeviceMobileCamera";
import { DeviceMobileCameraIcon as DeviceMobileCameraThinIcon } from "../thin/DeviceMobileCamera";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DeviceMobileCameraThinIcon,
	light: DeviceMobileCameraLightIcon,
	regular: DeviceMobileCameraRegularIcon,
	bold: DeviceMobileCameraBoldIcon,
	fill: DeviceMobileCameraFillIcon,
	duotone: DeviceMobileCameraDuotoneIcon,
} as const;

export function DeviceMobileCameraIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DeviceMobileCameraIcon as DeviceMobileCamera };
