import { SpeakerHighIcon as SpeakerHighBoldIcon } from "../bold/SpeakerHigh";
import { SpeakerHighIcon as SpeakerHighDuotoneIcon } from "../duotone/SpeakerHigh";
import { SpeakerHighIcon as SpeakerHighFillIcon } from "../fill/SpeakerHigh";
import { SpeakerHighIcon as SpeakerHighLightIcon } from "../light/SpeakerHigh";
import { SpeakerHighIcon as SpeakerHighRegularIcon } from "../regular/SpeakerHigh";
import { SpeakerHighIcon as SpeakerHighThinIcon } from "../thin/SpeakerHigh";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SpeakerHighThinIcon,
	light: SpeakerHighLightIcon,
	regular: SpeakerHighRegularIcon,
	bold: SpeakerHighBoldIcon,
	fill: SpeakerHighFillIcon,
	duotone: SpeakerHighDuotoneIcon,
} as const;

export function SpeakerHighIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SpeakerHighIcon as SpeakerHigh };
