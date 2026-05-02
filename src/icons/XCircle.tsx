import { XCircleIcon as XCircleBoldIcon } from "../bold/XCircle";
import { XCircleIcon as XCircleDuotoneIcon } from "../duotone/XCircle";
import { XCircleIcon as XCircleFillIcon } from "../fill/XCircle";
import { XCircleIcon as XCircleLightIcon } from "../light/XCircle";
import { XCircleIcon as XCircleRegularIcon } from "../regular/XCircle";
import { XCircleIcon as XCircleThinIcon } from "../thin/XCircle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: XCircleThinIcon,
	light: XCircleLightIcon,
	regular: XCircleRegularIcon,
	bold: XCircleBoldIcon,
	fill: XCircleFillIcon,
	duotone: XCircleDuotoneIcon,
} as const;

export function XCircleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { XCircleIcon as XCircle };
