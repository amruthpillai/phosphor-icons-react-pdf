import { MicrophoneIcon as MicrophoneBoldIcon } from "../bold/Microphone";
import { MicrophoneIcon as MicrophoneDuotoneIcon } from "../duotone/Microphone";
import { MicrophoneIcon as MicrophoneFillIcon } from "../fill/Microphone";
import { MicrophoneIcon as MicrophoneLightIcon } from "../light/Microphone";
import { MicrophoneIcon as MicrophoneRegularIcon } from "../regular/Microphone";
import { MicrophoneIcon as MicrophoneThinIcon } from "../thin/Microphone";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MicrophoneThinIcon,
	light: MicrophoneLightIcon,
	regular: MicrophoneRegularIcon,
	bold: MicrophoneBoldIcon,
	fill: MicrophoneFillIcon,
	duotone: MicrophoneDuotoneIcon,
} as const;

export function MicrophoneIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MicrophoneIcon as Microphone };
