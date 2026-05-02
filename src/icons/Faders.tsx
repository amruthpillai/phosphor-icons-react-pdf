import { FadersIcon as FadersBoldIcon } from "../bold/Faders";
import { FadersIcon as FadersDuotoneIcon } from "../duotone/Faders";
import { FadersIcon as FadersFillIcon } from "../fill/Faders";
import { FadersIcon as FadersLightIcon } from "../light/Faders";
import { FadersIcon as FadersRegularIcon } from "../regular/Faders";
import { FadersIcon as FadersThinIcon } from "../thin/Faders";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FadersThinIcon,
	light: FadersLightIcon,
	regular: FadersRegularIcon,
	bold: FadersBoldIcon,
	fill: FadersFillIcon,
	duotone: FadersDuotoneIcon,
} as const;

export function FadersIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FadersIcon as Faders };
