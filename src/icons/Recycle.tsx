import { RecycleIcon as RecycleBoldIcon } from "../bold/Recycle";
import { RecycleIcon as RecycleDuotoneIcon } from "../duotone/Recycle";
import { RecycleIcon as RecycleFillIcon } from "../fill/Recycle";
import { RecycleIcon as RecycleLightIcon } from "../light/Recycle";
import { RecycleIcon as RecycleRegularIcon } from "../regular/Recycle";
import { RecycleIcon as RecycleThinIcon } from "../thin/Recycle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: RecycleThinIcon,
	light: RecycleLightIcon,
	regular: RecycleRegularIcon,
	bold: RecycleBoldIcon,
	fill: RecycleFillIcon,
	duotone: RecycleDuotoneIcon,
} as const;

export function RecycleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { RecycleIcon as Recycle };
