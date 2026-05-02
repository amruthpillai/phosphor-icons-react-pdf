import { SpeakerSimpleXIcon as SpeakerSimpleXBoldIcon } from "../bold/SpeakerSimpleX";
import { SpeakerSimpleXIcon as SpeakerSimpleXDuotoneIcon } from "../duotone/SpeakerSimpleX";
import { SpeakerSimpleXIcon as SpeakerSimpleXFillIcon } from "../fill/SpeakerSimpleX";
import { SpeakerSimpleXIcon as SpeakerSimpleXLightIcon } from "../light/SpeakerSimpleX";
import { SpeakerSimpleXIcon as SpeakerSimpleXRegularIcon } from "../regular/SpeakerSimpleX";
import { SpeakerSimpleXIcon as SpeakerSimpleXThinIcon } from "../thin/SpeakerSimpleX";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SpeakerSimpleXThinIcon,
	light: SpeakerSimpleXLightIcon,
	regular: SpeakerSimpleXRegularIcon,
	bold: SpeakerSimpleXBoldIcon,
	fill: SpeakerSimpleXFillIcon,
	duotone: SpeakerSimpleXDuotoneIcon,
} as const;

export function SpeakerSimpleXIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SpeakerSimpleXIcon as SpeakerSimpleX };
