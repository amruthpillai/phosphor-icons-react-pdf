import { ChalkboardIcon as ChalkboardBoldIcon } from "../bold/Chalkboard";
import { ChalkboardIcon as ChalkboardDuotoneIcon } from "../duotone/Chalkboard";
import { ChalkboardIcon as ChalkboardFillIcon } from "../fill/Chalkboard";
import { ChalkboardIcon as ChalkboardLightIcon } from "../light/Chalkboard";
import { ChalkboardIcon as ChalkboardRegularIcon } from "../regular/Chalkboard";
import { ChalkboardIcon as ChalkboardThinIcon } from "../thin/Chalkboard";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChalkboardThinIcon,
	light: ChalkboardLightIcon,
	regular: ChalkboardRegularIcon,
	bold: ChalkboardBoldIcon,
	fill: ChalkboardFillIcon,
	duotone: ChalkboardDuotoneIcon,
} as const;

export function ChalkboardIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChalkboardIcon as Chalkboard };
