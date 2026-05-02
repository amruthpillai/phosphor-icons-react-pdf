import { BandaidsIcon as BandaidsBoldIcon } from "../bold/Bandaids";
import { BandaidsIcon as BandaidsDuotoneIcon } from "../duotone/Bandaids";
import { BandaidsIcon as BandaidsFillIcon } from "../fill/Bandaids";
import { BandaidsIcon as BandaidsLightIcon } from "../light/Bandaids";
import { BandaidsIcon as BandaidsRegularIcon } from "../regular/Bandaids";
import { BandaidsIcon as BandaidsThinIcon } from "../thin/Bandaids";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BandaidsThinIcon,
	light: BandaidsLightIcon,
	regular: BandaidsRegularIcon,
	bold: BandaidsBoldIcon,
	fill: BandaidsFillIcon,
	duotone: BandaidsDuotoneIcon,
} as const;

export function BandaidsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BandaidsIcon as Bandaids };
