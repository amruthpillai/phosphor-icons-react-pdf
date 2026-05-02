import { PlanetIcon as PlanetBoldIcon } from "../bold/Planet";
import { PlanetIcon as PlanetDuotoneIcon } from "../duotone/Planet";
import { PlanetIcon as PlanetFillIcon } from "../fill/Planet";
import { PlanetIcon as PlanetLightIcon } from "../light/Planet";
import { PlanetIcon as PlanetRegularIcon } from "../regular/Planet";
import { PlanetIcon as PlanetThinIcon } from "../thin/Planet";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PlanetThinIcon,
	light: PlanetLightIcon,
	regular: PlanetRegularIcon,
	bold: PlanetBoldIcon,
	fill: PlanetFillIcon,
	duotone: PlanetDuotoneIcon,
} as const;

export function PlanetIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PlanetIcon as Planet };
