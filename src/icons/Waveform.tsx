import { WaveformIcon as WaveformBoldIcon } from "../bold/Waveform";
import { WaveformIcon as WaveformDuotoneIcon } from "../duotone/Waveform";
import { WaveformIcon as WaveformFillIcon } from "../fill/Waveform";
import { WaveformIcon as WaveformLightIcon } from "../light/Waveform";
import { WaveformIcon as WaveformRegularIcon } from "../regular/Waveform";
import { WaveformIcon as WaveformThinIcon } from "../thin/Waveform";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WaveformThinIcon,
	light: WaveformLightIcon,
	regular: WaveformRegularIcon,
	bold: WaveformBoldIcon,
	fill: WaveformFillIcon,
	duotone: WaveformDuotoneIcon,
} as const;

export function WaveformIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WaveformIcon as Waveform };
