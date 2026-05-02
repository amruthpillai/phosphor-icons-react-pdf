import { SpeakerNoneIcon as SpeakerNoneBoldIcon } from "../bold/SpeakerNone";
import { SpeakerNoneIcon as SpeakerNoneDuotoneIcon } from "../duotone/SpeakerNone";
import { SpeakerNoneIcon as SpeakerNoneFillIcon } from "../fill/SpeakerNone";
import { SpeakerNoneIcon as SpeakerNoneLightIcon } from "../light/SpeakerNone";
import { SpeakerNoneIcon as SpeakerNoneRegularIcon } from "../regular/SpeakerNone";
import { SpeakerNoneIcon as SpeakerNoneThinIcon } from "../thin/SpeakerNone";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SpeakerNoneThinIcon,
	light: SpeakerNoneLightIcon,
	regular: SpeakerNoneRegularIcon,
	bold: SpeakerNoneBoldIcon,
	fill: SpeakerNoneFillIcon,
	duotone: SpeakerNoneDuotoneIcon,
} as const;

export function SpeakerNoneIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SpeakerNoneIcon as SpeakerNone };
