import { PintGlassIcon as PintGlassBoldIcon } from "../bold/PintGlass";
import { PintGlassIcon as PintGlassDuotoneIcon } from "../duotone/PintGlass";
import { PintGlassIcon as PintGlassFillIcon } from "../fill/PintGlass";
import { PintGlassIcon as PintGlassLightIcon } from "../light/PintGlass";
import { PintGlassIcon as PintGlassRegularIcon } from "../regular/PintGlass";
import { PintGlassIcon as PintGlassThinIcon } from "../thin/PintGlass";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PintGlassThinIcon,
	light: PintGlassLightIcon,
	regular: PintGlassRegularIcon,
	bold: PintGlassBoldIcon,
	fill: PintGlassFillIcon,
	duotone: PintGlassDuotoneIcon,
} as const;

export function PintGlassIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PintGlassIcon as PintGlass };
