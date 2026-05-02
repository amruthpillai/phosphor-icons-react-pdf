import { StairsIcon as StairsBoldIcon } from "../bold/Stairs";
import { StairsIcon as StairsDuotoneIcon } from "../duotone/Stairs";
import { StairsIcon as StairsFillIcon } from "../fill/Stairs";
import { StairsIcon as StairsLightIcon } from "../light/Stairs";
import { StairsIcon as StairsRegularIcon } from "../regular/Stairs";
import { StairsIcon as StairsThinIcon } from "../thin/Stairs";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StairsThinIcon,
	light: StairsLightIcon,
	regular: StairsRegularIcon,
	bold: StairsBoldIcon,
	fill: StairsFillIcon,
	duotone: StairsDuotoneIcon,
} as const;

export function StairsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StairsIcon as Stairs };
