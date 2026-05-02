import { DeviceRotateIcon as DeviceRotateBoldIcon } from "../bold/DeviceRotate";
import { DeviceRotateIcon as DeviceRotateDuotoneIcon } from "../duotone/DeviceRotate";
import { DeviceRotateIcon as DeviceRotateFillIcon } from "../fill/DeviceRotate";
import { DeviceRotateIcon as DeviceRotateLightIcon } from "../light/DeviceRotate";
import { DeviceRotateIcon as DeviceRotateRegularIcon } from "../regular/DeviceRotate";
import { DeviceRotateIcon as DeviceRotateThinIcon } from "../thin/DeviceRotate";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DeviceRotateThinIcon,
	light: DeviceRotateLightIcon,
	regular: DeviceRotateRegularIcon,
	bold: DeviceRotateBoldIcon,
	fill: DeviceRotateFillIcon,
	duotone: DeviceRotateDuotoneIcon,
} as const;

export function DeviceRotateIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DeviceRotateIcon as DeviceRotate };
