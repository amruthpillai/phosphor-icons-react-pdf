import { PlayCircleIcon as PlayCircleBoldIcon } from "../bold/PlayCircle";
import { PlayCircleIcon as PlayCircleDuotoneIcon } from "../duotone/PlayCircle";
import { PlayCircleIcon as PlayCircleFillIcon } from "../fill/PlayCircle";
import { PlayCircleIcon as PlayCircleLightIcon } from "../light/PlayCircle";
import { PlayCircleIcon as PlayCircleRegularIcon } from "../regular/PlayCircle";
import { PlayCircleIcon as PlayCircleThinIcon } from "../thin/PlayCircle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PlayCircleThinIcon,
	light: PlayCircleLightIcon,
	regular: PlayCircleRegularIcon,
	bold: PlayCircleBoldIcon,
	fill: PlayCircleFillIcon,
	duotone: PlayCircleDuotoneIcon,
} as const;

export function PlayCircleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PlayCircleIcon as PlayCircle };
