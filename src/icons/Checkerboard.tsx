import { CheckerboardIcon as CheckerboardBoldIcon } from "../bold/Checkerboard";
import { CheckerboardIcon as CheckerboardDuotoneIcon } from "../duotone/Checkerboard";
import { CheckerboardIcon as CheckerboardFillIcon } from "../fill/Checkerboard";
import { CheckerboardIcon as CheckerboardLightIcon } from "../light/Checkerboard";
import { CheckerboardIcon as CheckerboardRegularIcon } from "../regular/Checkerboard";
import { CheckerboardIcon as CheckerboardThinIcon } from "../thin/Checkerboard";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CheckerboardThinIcon,
	light: CheckerboardLightIcon,
	regular: CheckerboardRegularIcon,
	bold: CheckerboardBoldIcon,
	fill: CheckerboardFillIcon,
	duotone: CheckerboardDuotoneIcon,
} as const;

export function CheckerboardIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CheckerboardIcon as Checkerboard };
