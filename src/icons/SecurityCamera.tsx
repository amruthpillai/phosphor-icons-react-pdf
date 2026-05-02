import { SecurityCameraIcon as SecurityCameraBoldIcon } from "../bold/SecurityCamera";
import { SecurityCameraIcon as SecurityCameraDuotoneIcon } from "../duotone/SecurityCamera";
import { SecurityCameraIcon as SecurityCameraFillIcon } from "../fill/SecurityCamera";
import { SecurityCameraIcon as SecurityCameraLightIcon } from "../light/SecurityCamera";
import { SecurityCameraIcon as SecurityCameraRegularIcon } from "../regular/SecurityCamera";
import { SecurityCameraIcon as SecurityCameraThinIcon } from "../thin/SecurityCamera";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SecurityCameraThinIcon,
	light: SecurityCameraLightIcon,
	regular: SecurityCameraRegularIcon,
	bold: SecurityCameraBoldIcon,
	fill: SecurityCameraFillIcon,
	duotone: SecurityCameraDuotoneIcon,
} as const;

export function SecurityCameraIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SecurityCameraIcon as SecurityCamera };
