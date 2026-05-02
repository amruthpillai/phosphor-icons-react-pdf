import { SpeakerXIcon as SpeakerXBoldIcon } from "../bold/SpeakerX";
import { SpeakerXIcon as SpeakerXDuotoneIcon } from "../duotone/SpeakerX";
import { SpeakerXIcon as SpeakerXFillIcon } from "../fill/SpeakerX";
import { SpeakerXIcon as SpeakerXLightIcon } from "../light/SpeakerX";
import { SpeakerXIcon as SpeakerXRegularIcon } from "../regular/SpeakerX";
import { SpeakerXIcon as SpeakerXThinIcon } from "../thin/SpeakerX";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SpeakerXThinIcon,
	light: SpeakerXLightIcon,
	regular: SpeakerXRegularIcon,
	bold: SpeakerXBoldIcon,
	fill: SpeakerXFillIcon,
	duotone: SpeakerXDuotoneIcon,
} as const;

export function SpeakerXIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SpeakerXIcon as SpeakerX };
