import { ButterflyIcon as ButterflyBoldIcon } from "../bold/Butterfly";
import { ButterflyIcon as ButterflyDuotoneIcon } from "../duotone/Butterfly";
import { ButterflyIcon as ButterflyFillIcon } from "../fill/Butterfly";
import { ButterflyIcon as ButterflyLightIcon } from "../light/Butterfly";
import { ButterflyIcon as ButterflyRegularIcon } from "../regular/Butterfly";
import { ButterflyIcon as ButterflyThinIcon } from "../thin/Butterfly";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ButterflyThinIcon,
	light: ButterflyLightIcon,
	regular: ButterflyRegularIcon,
	bold: ButterflyBoldIcon,
	fill: ButterflyFillIcon,
	duotone: ButterflyDuotoneIcon,
} as const;

export function ButterflyIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ButterflyIcon as Butterfly };
