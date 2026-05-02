import { EqualizerIcon as EqualizerBoldIcon } from "../bold/Equalizer";
import { EqualizerIcon as EqualizerDuotoneIcon } from "../duotone/Equalizer";
import { EqualizerIcon as EqualizerFillIcon } from "../fill/Equalizer";
import { EqualizerIcon as EqualizerLightIcon } from "../light/Equalizer";
import { EqualizerIcon as EqualizerRegularIcon } from "../regular/Equalizer";
import { EqualizerIcon as EqualizerThinIcon } from "../thin/Equalizer";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EqualizerThinIcon,
	light: EqualizerLightIcon,
	regular: EqualizerRegularIcon,
	bold: EqualizerBoldIcon,
	fill: EqualizerFillIcon,
	duotone: EqualizerDuotoneIcon,
} as const;

export function EqualizerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EqualizerIcon as Equalizer };
