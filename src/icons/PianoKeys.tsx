import { PianoKeysIcon as PianoKeysBoldIcon } from "../bold/PianoKeys";
import { PianoKeysIcon as PianoKeysDuotoneIcon } from "../duotone/PianoKeys";
import { PianoKeysIcon as PianoKeysFillIcon } from "../fill/PianoKeys";
import { PianoKeysIcon as PianoKeysLightIcon } from "../light/PianoKeys";
import { PianoKeysIcon as PianoKeysRegularIcon } from "../regular/PianoKeys";
import { PianoKeysIcon as PianoKeysThinIcon } from "../thin/PianoKeys";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PianoKeysThinIcon,
	light: PianoKeysLightIcon,
	regular: PianoKeysRegularIcon,
	bold: PianoKeysBoldIcon,
	fill: PianoKeysFillIcon,
	duotone: PianoKeysDuotoneIcon,
} as const;

export function PianoKeysIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PianoKeysIcon as PianoKeys };
