import { CompassRoseIcon as CompassRoseBoldIcon } from "../bold/CompassRose";
import { CompassRoseIcon as CompassRoseDuotoneIcon } from "../duotone/CompassRose";
import { CompassRoseIcon as CompassRoseFillIcon } from "../fill/CompassRose";
import { CompassRoseIcon as CompassRoseLightIcon } from "../light/CompassRose";
import { CompassRoseIcon as CompassRoseRegularIcon } from "../regular/CompassRose";
import { CompassRoseIcon as CompassRoseThinIcon } from "../thin/CompassRose";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CompassRoseThinIcon,
	light: CompassRoseLightIcon,
	regular: CompassRoseRegularIcon,
	bold: CompassRoseBoldIcon,
	fill: CompassRoseFillIcon,
	duotone: CompassRoseDuotoneIcon,
} as const;

export function CompassRoseIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CompassRoseIcon as CompassRose };
