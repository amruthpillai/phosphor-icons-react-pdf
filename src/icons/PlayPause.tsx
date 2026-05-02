import { PlayPauseIcon as PlayPauseBoldIcon } from "../bold/PlayPause";
import { PlayPauseIcon as PlayPauseDuotoneIcon } from "../duotone/PlayPause";
import { PlayPauseIcon as PlayPauseFillIcon } from "../fill/PlayPause";
import { PlayPauseIcon as PlayPauseLightIcon } from "../light/PlayPause";
import { PlayPauseIcon as PlayPauseRegularIcon } from "../regular/PlayPause";
import { PlayPauseIcon as PlayPauseThinIcon } from "../thin/PlayPause";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PlayPauseThinIcon,
	light: PlayPauseLightIcon,
	regular: PlayPauseRegularIcon,
	bold: PlayPauseBoldIcon,
	fill: PlayPauseFillIcon,
	duotone: PlayPauseDuotoneIcon,
} as const;

export function PlayPauseIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PlayPauseIcon as PlayPause };
