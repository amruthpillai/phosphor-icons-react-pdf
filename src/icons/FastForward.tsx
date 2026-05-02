import { FastForwardIcon as FastForwardBoldIcon } from "../bold/FastForward";
import { FastForwardIcon as FastForwardDuotoneIcon } from "../duotone/FastForward";
import { FastForwardIcon as FastForwardFillIcon } from "../fill/FastForward";
import { FastForwardIcon as FastForwardLightIcon } from "../light/FastForward";
import { FastForwardIcon as FastForwardRegularIcon } from "../regular/FastForward";
import { FastForwardIcon as FastForwardThinIcon } from "../thin/FastForward";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FastForwardThinIcon,
	light: FastForwardLightIcon,
	regular: FastForwardRegularIcon,
	bold: FastForwardBoldIcon,
	fill: FastForwardFillIcon,
	duotone: FastForwardDuotoneIcon,
} as const;

export function FastForwardIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FastForwardIcon as FastForward };
