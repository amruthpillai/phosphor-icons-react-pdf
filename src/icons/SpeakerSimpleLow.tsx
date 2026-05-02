import { SpeakerSimpleLowIcon as SpeakerSimpleLowBoldIcon } from "../bold/SpeakerSimpleLow";
import { SpeakerSimpleLowIcon as SpeakerSimpleLowDuotoneIcon } from "../duotone/SpeakerSimpleLow";
import { SpeakerSimpleLowIcon as SpeakerSimpleLowFillIcon } from "../fill/SpeakerSimpleLow";
import { SpeakerSimpleLowIcon as SpeakerSimpleLowLightIcon } from "../light/SpeakerSimpleLow";
import { SpeakerSimpleLowIcon as SpeakerSimpleLowRegularIcon } from "../regular/SpeakerSimpleLow";
import { SpeakerSimpleLowIcon as SpeakerSimpleLowThinIcon } from "../thin/SpeakerSimpleLow";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SpeakerSimpleLowThinIcon,
	light: SpeakerSimpleLowLightIcon,
	regular: SpeakerSimpleLowRegularIcon,
	bold: SpeakerSimpleLowBoldIcon,
	fill: SpeakerSimpleLowFillIcon,
	duotone: SpeakerSimpleLowDuotoneIcon,
} as const;

export function SpeakerSimpleLowIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SpeakerSimpleLowIcon as SpeakerSimpleLow };
