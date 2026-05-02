import { WaveSawtoothIcon as WaveSawtoothBoldIcon } from "../bold/WaveSawtooth";
import { WaveSawtoothIcon as WaveSawtoothDuotoneIcon } from "../duotone/WaveSawtooth";
import { WaveSawtoothIcon as WaveSawtoothFillIcon } from "../fill/WaveSawtooth";
import { WaveSawtoothIcon as WaveSawtoothLightIcon } from "../light/WaveSawtooth";
import { WaveSawtoothIcon as WaveSawtoothRegularIcon } from "../regular/WaveSawtooth";
import { WaveSawtoothIcon as WaveSawtoothThinIcon } from "../thin/WaveSawtooth";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WaveSawtoothThinIcon,
	light: WaveSawtoothLightIcon,
	regular: WaveSawtoothRegularIcon,
	bold: WaveSawtoothBoldIcon,
	fill: WaveSawtoothFillIcon,
	duotone: WaveSawtoothDuotoneIcon,
} as const;

export function WaveSawtoothIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WaveSawtoothIcon as WaveSawtooth };
