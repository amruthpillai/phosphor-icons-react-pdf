import { SpeakerLowIcon as SpeakerLowBoldIcon } from "../bold/SpeakerLow";
import { SpeakerLowIcon as SpeakerLowDuotoneIcon } from "../duotone/SpeakerLow";
import { SpeakerLowIcon as SpeakerLowFillIcon } from "../fill/SpeakerLow";
import { SpeakerLowIcon as SpeakerLowLightIcon } from "../light/SpeakerLow";
import { SpeakerLowIcon as SpeakerLowRegularIcon } from "../regular/SpeakerLow";
import { SpeakerLowIcon as SpeakerLowThinIcon } from "../thin/SpeakerLow";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SpeakerLowThinIcon,
	light: SpeakerLowLightIcon,
	regular: SpeakerLowRegularIcon,
	bold: SpeakerLowBoldIcon,
	fill: SpeakerLowFillIcon,
	duotone: SpeakerLowDuotoneIcon,
} as const;

export function SpeakerLowIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SpeakerLowIcon as SpeakerLow };
