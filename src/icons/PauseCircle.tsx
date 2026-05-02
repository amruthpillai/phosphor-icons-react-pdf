import { PauseCircleIcon as PauseCircleBoldIcon } from "../bold/PauseCircle";
import { PauseCircleIcon as PauseCircleDuotoneIcon } from "../duotone/PauseCircle";
import { PauseCircleIcon as PauseCircleFillIcon } from "../fill/PauseCircle";
import { PauseCircleIcon as PauseCircleLightIcon } from "../light/PauseCircle";
import { PauseCircleIcon as PauseCircleRegularIcon } from "../regular/PauseCircle";
import { PauseCircleIcon as PauseCircleThinIcon } from "../thin/PauseCircle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PauseCircleThinIcon,
	light: PauseCircleLightIcon,
	regular: PauseCircleRegularIcon,
	bold: PauseCircleBoldIcon,
	fill: PauseCircleFillIcon,
	duotone: PauseCircleDuotoneIcon,
} as const;

export function PauseCircleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PauseCircleIcon as PauseCircle };
