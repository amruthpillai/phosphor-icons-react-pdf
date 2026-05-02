import { RainbowIcon as RainbowBoldIcon } from "../bold/Rainbow";
import { RainbowIcon as RainbowDuotoneIcon } from "../duotone/Rainbow";
import { RainbowIcon as RainbowFillIcon } from "../fill/Rainbow";
import { RainbowIcon as RainbowLightIcon } from "../light/Rainbow";
import { RainbowIcon as RainbowRegularIcon } from "../regular/Rainbow";
import { RainbowIcon as RainbowThinIcon } from "../thin/Rainbow";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RainbowThinIcon,
	light: RainbowLightIcon,
	regular: RainbowRegularIcon,
	bold: RainbowBoldIcon,
	fill: RainbowFillIcon,
	duotone: RainbowDuotoneIcon,
} as const;

export function RainbowIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RainbowIcon as Rainbow };
