import { VoicemailIcon as VoicemailBoldIcon } from "../bold/Voicemail";
import { VoicemailIcon as VoicemailDuotoneIcon } from "../duotone/Voicemail";
import { VoicemailIcon as VoicemailFillIcon } from "../fill/Voicemail";
import { VoicemailIcon as VoicemailLightIcon } from "../light/Voicemail";
import { VoicemailIcon as VoicemailRegularIcon } from "../regular/Voicemail";
import { VoicemailIcon as VoicemailThinIcon } from "../thin/Voicemail";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: VoicemailThinIcon,
	light: VoicemailLightIcon,
	regular: VoicemailRegularIcon,
	bold: VoicemailBoldIcon,
	fill: VoicemailFillIcon,
	duotone: VoicemailDuotoneIcon,
} as const;

export function VoicemailIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { VoicemailIcon as Voicemail };
