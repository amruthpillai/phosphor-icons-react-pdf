import { DeviceMobileSpeakerIcon as DeviceMobileSpeakerBoldIcon } from "../bold/DeviceMobileSpeaker";
import { DeviceMobileSpeakerIcon as DeviceMobileSpeakerDuotoneIcon } from "../duotone/DeviceMobileSpeaker";
import { DeviceMobileSpeakerIcon as DeviceMobileSpeakerFillIcon } from "../fill/DeviceMobileSpeaker";
import { DeviceMobileSpeakerIcon as DeviceMobileSpeakerLightIcon } from "../light/DeviceMobileSpeaker";
import { DeviceMobileSpeakerIcon as DeviceMobileSpeakerRegularIcon } from "../regular/DeviceMobileSpeaker";
import { DeviceMobileSpeakerIcon as DeviceMobileSpeakerThinIcon } from "../thin/DeviceMobileSpeaker";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DeviceMobileSpeakerThinIcon,
	light: DeviceMobileSpeakerLightIcon,
	regular: DeviceMobileSpeakerRegularIcon,
	bold: DeviceMobileSpeakerBoldIcon,
	fill: DeviceMobileSpeakerFillIcon,
	duotone: DeviceMobileSpeakerDuotoneIcon,
} as const;

export function DeviceMobileSpeakerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DeviceMobileSpeakerIcon as DeviceMobileSpeaker };
