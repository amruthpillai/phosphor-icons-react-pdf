import { SpiralIcon as SpiralBoldIcon } from "../bold/Spiral";
import { SpiralIcon as SpiralDuotoneIcon } from "../duotone/Spiral";
import { SpiralIcon as SpiralFillIcon } from "../fill/Spiral";
import { SpiralIcon as SpiralLightIcon } from "../light/Spiral";
import { SpiralIcon as SpiralRegularIcon } from "../regular/Spiral";
import { SpiralIcon as SpiralThinIcon } from "../thin/Spiral";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SpiralThinIcon,
	light: SpiralLightIcon,
	regular: SpiralRegularIcon,
	bold: SpiralBoldIcon,
	fill: SpiralFillIcon,
	duotone: SpiralDuotoneIcon,
} as const;

export function SpiralIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SpiralIcon as Spiral };
