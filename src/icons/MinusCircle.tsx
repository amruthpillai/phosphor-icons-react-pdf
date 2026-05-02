import { MinusCircleIcon as MinusCircleBoldIcon } from "../bold/MinusCircle";
import { MinusCircleIcon as MinusCircleDuotoneIcon } from "../duotone/MinusCircle";
import { MinusCircleIcon as MinusCircleFillIcon } from "../fill/MinusCircle";
import { MinusCircleIcon as MinusCircleLightIcon } from "../light/MinusCircle";
import { MinusCircleIcon as MinusCircleRegularIcon } from "../regular/MinusCircle";
import { MinusCircleIcon as MinusCircleThinIcon } from "../thin/MinusCircle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MinusCircleThinIcon,
	light: MinusCircleLightIcon,
	regular: MinusCircleRegularIcon,
	bold: MinusCircleBoldIcon,
	fill: MinusCircleFillIcon,
	duotone: MinusCircleDuotoneIcon,
} as const;

export function MinusCircleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MinusCircleIcon as MinusCircle };
