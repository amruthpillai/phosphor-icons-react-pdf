import { FastForwardCircleIcon as FastForwardCircleBoldIcon } from "../bold/FastForwardCircle";
import { FastForwardCircleIcon as FastForwardCircleDuotoneIcon } from "../duotone/FastForwardCircle";
import { FastForwardCircleIcon as FastForwardCircleFillIcon } from "../fill/FastForwardCircle";
import { FastForwardCircleIcon as FastForwardCircleLightIcon } from "../light/FastForwardCircle";
import { FastForwardCircleIcon as FastForwardCircleRegularIcon } from "../regular/FastForwardCircle";
import { FastForwardCircleIcon as FastForwardCircleThinIcon } from "../thin/FastForwardCircle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FastForwardCircleThinIcon,
	light: FastForwardCircleLightIcon,
	regular: FastForwardCircleRegularIcon,
	bold: FastForwardCircleBoldIcon,
	fill: FastForwardCircleFillIcon,
	duotone: FastForwardCircleDuotoneIcon,
} as const;

export function FastForwardCircleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FastForwardCircleIcon as FastForwardCircle };
