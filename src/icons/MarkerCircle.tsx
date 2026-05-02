import { MarkerCircleIcon as MarkerCircleBoldIcon } from "../bold/MarkerCircle";
import { MarkerCircleIcon as MarkerCircleDuotoneIcon } from "../duotone/MarkerCircle";
import { MarkerCircleIcon as MarkerCircleFillIcon } from "../fill/MarkerCircle";
import { MarkerCircleIcon as MarkerCircleLightIcon } from "../light/MarkerCircle";
import { MarkerCircleIcon as MarkerCircleRegularIcon } from "../regular/MarkerCircle";
import { MarkerCircleIcon as MarkerCircleThinIcon } from "../thin/MarkerCircle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MarkerCircleThinIcon,
	light: MarkerCircleLightIcon,
	regular: MarkerCircleRegularIcon,
	bold: MarkerCircleBoldIcon,
	fill: MarkerCircleFillIcon,
	duotone: MarkerCircleDuotoneIcon,
} as const;

export function MarkerCircleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MarkerCircleIcon as MarkerCircle };
