import { WavesIcon as WavesBoldIcon } from "../bold/Waves";
import { WavesIcon as WavesDuotoneIcon } from "../duotone/Waves";
import { WavesIcon as WavesFillIcon } from "../fill/Waves";
import { WavesIcon as WavesLightIcon } from "../light/Waves";
import { WavesIcon as WavesRegularIcon } from "../regular/Waves";
import { WavesIcon as WavesThinIcon } from "../thin/Waves";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WavesThinIcon,
	light: WavesLightIcon,
	regular: WavesRegularIcon,
	bold: WavesBoldIcon,
	fill: WavesFillIcon,
	duotone: WavesDuotoneIcon,
} as const;

export function WavesIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WavesIcon as Waves };
