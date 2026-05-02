import { SpeakerHifiIcon as SpeakerHifiBoldIcon } from "../bold/SpeakerHifi";
import { SpeakerHifiIcon as SpeakerHifiDuotoneIcon } from "../duotone/SpeakerHifi";
import { SpeakerHifiIcon as SpeakerHifiFillIcon } from "../fill/SpeakerHifi";
import { SpeakerHifiIcon as SpeakerHifiLightIcon } from "../light/SpeakerHifi";
import { SpeakerHifiIcon as SpeakerHifiRegularIcon } from "../regular/SpeakerHifi";
import { SpeakerHifiIcon as SpeakerHifiThinIcon } from "../thin/SpeakerHifi";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SpeakerHifiThinIcon,
	light: SpeakerHifiLightIcon,
	regular: SpeakerHifiRegularIcon,
	bold: SpeakerHifiBoldIcon,
	fill: SpeakerHifiFillIcon,
	duotone: SpeakerHifiDuotoneIcon,
} as const;

export function SpeakerHifiIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SpeakerHifiIcon as SpeakerHifi };
