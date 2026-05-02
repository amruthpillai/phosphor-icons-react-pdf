import { StopCircleIcon as StopCircleBoldIcon } from "../bold/StopCircle";
import { StopCircleIcon as StopCircleDuotoneIcon } from "../duotone/StopCircle";
import { StopCircleIcon as StopCircleFillIcon } from "../fill/StopCircle";
import { StopCircleIcon as StopCircleLightIcon } from "../light/StopCircle";
import { StopCircleIcon as StopCircleRegularIcon } from "../regular/StopCircle";
import { StopCircleIcon as StopCircleThinIcon } from "../thin/StopCircle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StopCircleThinIcon,
	light: StopCircleLightIcon,
	regular: StopCircleRegularIcon,
	bold: StopCircleBoldIcon,
	fill: StopCircleFillIcon,
	duotone: StopCircleDuotoneIcon,
} as const;

export function StopCircleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StopCircleIcon as StopCircle };
