import { NumpadIcon as NumpadBoldIcon } from "../bold/Numpad";
import { NumpadIcon as NumpadDuotoneIcon } from "../duotone/Numpad";
import { NumpadIcon as NumpadFillIcon } from "../fill/Numpad";
import { NumpadIcon as NumpadLightIcon } from "../light/Numpad";
import { NumpadIcon as NumpadRegularIcon } from "../regular/Numpad";
import { NumpadIcon as NumpadThinIcon } from "../thin/Numpad";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NumpadThinIcon,
	light: NumpadLightIcon,
	regular: NumpadRegularIcon,
	bold: NumpadBoldIcon,
	fill: NumpadFillIcon,
	duotone: NumpadDuotoneIcon,
} as const;

export function NumpadIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NumpadIcon as Numpad };
