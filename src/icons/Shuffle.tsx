import { ShuffleIcon as ShuffleBoldIcon } from "../bold/Shuffle";
import { ShuffleIcon as ShuffleDuotoneIcon } from "../duotone/Shuffle";
import { ShuffleIcon as ShuffleFillIcon } from "../fill/Shuffle";
import { ShuffleIcon as ShuffleLightIcon } from "../light/Shuffle";
import { ShuffleIcon as ShuffleRegularIcon } from "../regular/Shuffle";
import { ShuffleIcon as ShuffleThinIcon } from "../thin/Shuffle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShuffleThinIcon,
	light: ShuffleLightIcon,
	regular: ShuffleRegularIcon,
	bold: ShuffleBoldIcon,
	fill: ShuffleFillIcon,
	duotone: ShuffleDuotoneIcon,
} as const;

export function ShuffleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShuffleIcon as Shuffle };
