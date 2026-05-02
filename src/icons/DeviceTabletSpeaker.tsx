import { DeviceTabletSpeakerIcon as DeviceTabletSpeakerBoldIcon } from "../bold/DeviceTabletSpeaker";
import { DeviceTabletSpeakerIcon as DeviceTabletSpeakerDuotoneIcon } from "../duotone/DeviceTabletSpeaker";
import { DeviceTabletSpeakerIcon as DeviceTabletSpeakerFillIcon } from "../fill/DeviceTabletSpeaker";
import { DeviceTabletSpeakerIcon as DeviceTabletSpeakerLightIcon } from "../light/DeviceTabletSpeaker";
import { DeviceTabletSpeakerIcon as DeviceTabletSpeakerRegularIcon } from "../regular/DeviceTabletSpeaker";
import { DeviceTabletSpeakerIcon as DeviceTabletSpeakerThinIcon } from "../thin/DeviceTabletSpeaker";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DeviceTabletSpeakerThinIcon,
	light: DeviceTabletSpeakerLightIcon,
	regular: DeviceTabletSpeakerRegularIcon,
	bold: DeviceTabletSpeakerBoldIcon,
	fill: DeviceTabletSpeakerFillIcon,
	duotone: DeviceTabletSpeakerDuotoneIcon,
} as const;

export function DeviceTabletSpeakerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DeviceTabletSpeakerIcon as DeviceTabletSpeaker };
