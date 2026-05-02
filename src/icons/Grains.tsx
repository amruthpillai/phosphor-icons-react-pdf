import { GrainsIcon as GrainsBoldIcon } from "../bold/Grains";
import { GrainsIcon as GrainsDuotoneIcon } from "../duotone/Grains";
import { GrainsIcon as GrainsFillIcon } from "../fill/Grains";
import { GrainsIcon as GrainsLightIcon } from "../light/Grains";
import { GrainsIcon as GrainsRegularIcon } from "../regular/Grains";
import { GrainsIcon as GrainsThinIcon } from "../thin/Grains";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GrainsThinIcon,
	light: GrainsLightIcon,
	regular: GrainsRegularIcon,
	bold: GrainsBoldIcon,
	fill: GrainsFillIcon,
	duotone: GrainsDuotoneIcon,
} as const;

export function GrainsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GrainsIcon as Grains };
