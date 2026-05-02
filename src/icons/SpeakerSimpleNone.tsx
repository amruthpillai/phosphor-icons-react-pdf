import { SpeakerSimpleNoneIcon as SpeakerSimpleNoneBoldIcon } from "../bold/SpeakerSimpleNone";
import { SpeakerSimpleNoneIcon as SpeakerSimpleNoneDuotoneIcon } from "../duotone/SpeakerSimpleNone";
import { SpeakerSimpleNoneIcon as SpeakerSimpleNoneFillIcon } from "../fill/SpeakerSimpleNone";
import { SpeakerSimpleNoneIcon as SpeakerSimpleNoneLightIcon } from "../light/SpeakerSimpleNone";
import { SpeakerSimpleNoneIcon as SpeakerSimpleNoneRegularIcon } from "../regular/SpeakerSimpleNone";
import { SpeakerSimpleNoneIcon as SpeakerSimpleNoneThinIcon } from "../thin/SpeakerSimpleNone";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SpeakerSimpleNoneThinIcon,
	light: SpeakerSimpleNoneLightIcon,
	regular: SpeakerSimpleNoneRegularIcon,
	bold: SpeakerSimpleNoneBoldIcon,
	fill: SpeakerSimpleNoneFillIcon,
	duotone: SpeakerSimpleNoneDuotoneIcon,
} as const;

export function SpeakerSimpleNoneIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SpeakerSimpleNoneIcon as SpeakerSimpleNone };
