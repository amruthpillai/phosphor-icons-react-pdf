import { PencilCircleIcon as PencilCircleBoldIcon } from "../bold/PencilCircle";
import { PencilCircleIcon as PencilCircleDuotoneIcon } from "../duotone/PencilCircle";
import { PencilCircleIcon as PencilCircleFillIcon } from "../fill/PencilCircle";
import { PencilCircleIcon as PencilCircleLightIcon } from "../light/PencilCircle";
import { PencilCircleIcon as PencilCircleRegularIcon } from "../regular/PencilCircle";
import { PencilCircleIcon as PencilCircleThinIcon } from "../thin/PencilCircle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PencilCircleThinIcon,
	light: PencilCircleLightIcon,
	regular: PencilCircleRegularIcon,
	bold: PencilCircleBoldIcon,
	fill: PencilCircleFillIcon,
	duotone: PencilCircleDuotoneIcon,
} as const;

export function PencilCircleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PencilCircleIcon as PencilCircle };
