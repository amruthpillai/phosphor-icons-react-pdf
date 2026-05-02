import { SpeakerSimpleHighIcon as SpeakerSimpleHighBoldIcon } from "../bold/SpeakerSimpleHigh";
import { SpeakerSimpleHighIcon as SpeakerSimpleHighDuotoneIcon } from "../duotone/SpeakerSimpleHigh";
import { SpeakerSimpleHighIcon as SpeakerSimpleHighFillIcon } from "../fill/SpeakerSimpleHigh";
import { SpeakerSimpleHighIcon as SpeakerSimpleHighLightIcon } from "../light/SpeakerSimpleHigh";
import { SpeakerSimpleHighIcon as SpeakerSimpleHighRegularIcon } from "../regular/SpeakerSimpleHigh";
import { SpeakerSimpleHighIcon as SpeakerSimpleHighThinIcon } from "../thin/SpeakerSimpleHigh";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SpeakerSimpleHighThinIcon,
	light: SpeakerSimpleHighLightIcon,
	regular: SpeakerSimpleHighRegularIcon,
	bold: SpeakerSimpleHighBoldIcon,
	fill: SpeakerSimpleHighFillIcon,
	duotone: SpeakerSimpleHighDuotoneIcon,
} as const;

export function SpeakerSimpleHighIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SpeakerSimpleHighIcon as SpeakerSimpleHigh };
