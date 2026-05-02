import { MetronomeIcon as MetronomeBoldIcon } from "../bold/Metronome";
import { MetronomeIcon as MetronomeDuotoneIcon } from "../duotone/Metronome";
import { MetronomeIcon as MetronomeFillIcon } from "../fill/Metronome";
import { MetronomeIcon as MetronomeLightIcon } from "../light/Metronome";
import { MetronomeIcon as MetronomeRegularIcon } from "../regular/Metronome";
import { MetronomeIcon as MetronomeThinIcon } from "../thin/Metronome";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MetronomeThinIcon,
	light: MetronomeLightIcon,
	regular: MetronomeRegularIcon,
	bold: MetronomeBoldIcon,
	fill: MetronomeFillIcon,
	duotone: MetronomeDuotoneIcon,
} as const;

export function MetronomeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MetronomeIcon as Metronome };
