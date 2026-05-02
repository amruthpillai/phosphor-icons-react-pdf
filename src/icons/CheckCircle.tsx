import { CheckCircleIcon as CheckCircleBoldIcon } from "../bold/CheckCircle";
import { CheckCircleIcon as CheckCircleDuotoneIcon } from "../duotone/CheckCircle";
import { CheckCircleIcon as CheckCircleFillIcon } from "../fill/CheckCircle";
import { CheckCircleIcon as CheckCircleLightIcon } from "../light/CheckCircle";
import { CheckCircleIcon as CheckCircleRegularIcon } from "../regular/CheckCircle";
import { CheckCircleIcon as CheckCircleThinIcon } from "../thin/CheckCircle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CheckCircleThinIcon,
	light: CheckCircleLightIcon,
	regular: CheckCircleRegularIcon,
	bold: CheckCircleBoldIcon,
	fill: CheckCircleFillIcon,
	duotone: CheckCircleDuotoneIcon,
} as const;

export function CheckCircleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CheckCircleIcon as CheckCircle };
