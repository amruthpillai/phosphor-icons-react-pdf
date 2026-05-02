import { PlusCircleIcon as PlusCircleBoldIcon } from "../bold/PlusCircle";
import { PlusCircleIcon as PlusCircleDuotoneIcon } from "../duotone/PlusCircle";
import { PlusCircleIcon as PlusCircleFillIcon } from "../fill/PlusCircle";
import { PlusCircleIcon as PlusCircleLightIcon } from "../light/PlusCircle";
import { PlusCircleIcon as PlusCircleRegularIcon } from "../regular/PlusCircle";
import { PlusCircleIcon as PlusCircleThinIcon } from "../thin/PlusCircle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PlusCircleThinIcon,
	light: PlusCircleLightIcon,
	regular: PlusCircleRegularIcon,
	bold: PlusCircleBoldIcon,
	fill: PlusCircleFillIcon,
	duotone: PlusCircleDuotoneIcon,
} as const;

export function PlusCircleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PlusCircleIcon as PlusCircle };
