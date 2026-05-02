import { CircleIcon as CircleBoldIcon } from "../bold/Circle";
import { CircleIcon as CircleDuotoneIcon } from "../duotone/Circle";
import { CircleIcon as CircleFillIcon } from "../fill/Circle";
import { CircleIcon as CircleLightIcon } from "../light/Circle";
import { CircleIcon as CircleRegularIcon } from "../regular/Circle";
import { CircleIcon as CircleThinIcon } from "../thin/Circle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CircleThinIcon,
	light: CircleLightIcon,
	regular: CircleRegularIcon,
	bold: CircleBoldIcon,
	fill: CircleFillIcon,
	duotone: CircleDuotoneIcon,
} as const;

export function CircleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CircleIcon as Circle };
