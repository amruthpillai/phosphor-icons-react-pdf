import { DevicesIcon as DevicesBoldIcon } from "../bold/Devices";
import { DevicesIcon as DevicesDuotoneIcon } from "../duotone/Devices";
import { DevicesIcon as DevicesFillIcon } from "../fill/Devices";
import { DevicesIcon as DevicesLightIcon } from "../light/Devices";
import { DevicesIcon as DevicesRegularIcon } from "../regular/Devices";
import { DevicesIcon as DevicesThinIcon } from "../thin/Devices";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DevicesThinIcon,
	light: DevicesLightIcon,
	regular: DevicesRegularIcon,
	bold: DevicesBoldIcon,
	fill: DevicesFillIcon,
	duotone: DevicesDuotoneIcon,
} as const;

export function DevicesIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DevicesIcon as Devices };
