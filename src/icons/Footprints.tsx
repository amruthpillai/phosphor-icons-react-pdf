import { FootprintsIcon as FootprintsBoldIcon } from "../bold/Footprints";
import { FootprintsIcon as FootprintsDuotoneIcon } from "../duotone/Footprints";
import { FootprintsIcon as FootprintsFillIcon } from "../fill/Footprints";
import { FootprintsIcon as FootprintsLightIcon } from "../light/Footprints";
import { FootprintsIcon as FootprintsRegularIcon } from "../regular/Footprints";
import { FootprintsIcon as FootprintsThinIcon } from "../thin/Footprints";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FootprintsThinIcon,
	light: FootprintsLightIcon,
	regular: FootprintsRegularIcon,
	bold: FootprintsBoldIcon,
	fill: FootprintsFillIcon,
	duotone: FootprintsDuotoneIcon,
} as const;

export function FootprintsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FootprintsIcon as Footprints };
