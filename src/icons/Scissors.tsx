import { ScissorsIcon as ScissorsBoldIcon } from "../bold/Scissors";
import { ScissorsIcon as ScissorsDuotoneIcon } from "../duotone/Scissors";
import { ScissorsIcon as ScissorsFillIcon } from "../fill/Scissors";
import { ScissorsIcon as ScissorsLightIcon } from "../light/Scissors";
import { ScissorsIcon as ScissorsRegularIcon } from "../regular/Scissors";
import { ScissorsIcon as ScissorsThinIcon } from "../thin/Scissors";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ScissorsThinIcon,
	light: ScissorsLightIcon,
	regular: ScissorsRegularIcon,
	bold: ScissorsBoldIcon,
	fill: ScissorsFillIcon,
	duotone: ScissorsDuotoneIcon,
} as const;

export function ScissorsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ScissorsIcon as Scissors };
