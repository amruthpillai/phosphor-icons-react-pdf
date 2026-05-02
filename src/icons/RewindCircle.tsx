import { RewindCircleIcon as RewindCircleBoldIcon } from "../bold/RewindCircle";
import { RewindCircleIcon as RewindCircleDuotoneIcon } from "../duotone/RewindCircle";
import { RewindCircleIcon as RewindCircleFillIcon } from "../fill/RewindCircle";
import { RewindCircleIcon as RewindCircleLightIcon } from "../light/RewindCircle";
import { RewindCircleIcon as RewindCircleRegularIcon } from "../regular/RewindCircle";
import { RewindCircleIcon as RewindCircleThinIcon } from "../thin/RewindCircle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RewindCircleThinIcon,
	light: RewindCircleLightIcon,
	regular: RewindCircleRegularIcon,
	bold: RewindCircleBoldIcon,
	fill: RewindCircleFillIcon,
	duotone: RewindCircleDuotoneIcon,
} as const;

export function RewindCircleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RewindCircleIcon as RewindCircle };
