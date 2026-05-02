import { DeviceTabletIcon as DeviceTabletBoldIcon } from "../bold/DeviceTablet";
import { DeviceTabletIcon as DeviceTabletDuotoneIcon } from "../duotone/DeviceTablet";
import { DeviceTabletIcon as DeviceTabletFillIcon } from "../fill/DeviceTablet";
import { DeviceTabletIcon as DeviceTabletLightIcon } from "../light/DeviceTablet";
import { DeviceTabletIcon as DeviceTabletRegularIcon } from "../regular/DeviceTablet";
import { DeviceTabletIcon as DeviceTabletThinIcon } from "../thin/DeviceTablet";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DeviceTabletThinIcon,
	light: DeviceTabletLightIcon,
	regular: DeviceTabletRegularIcon,
	bold: DeviceTabletBoldIcon,
	fill: DeviceTabletFillIcon,
	duotone: DeviceTabletDuotoneIcon,
} as const;

export function DeviceTabletIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DeviceTabletIcon as DeviceTablet };
