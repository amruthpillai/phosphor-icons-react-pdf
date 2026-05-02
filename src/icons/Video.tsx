import { VideoIcon as VideoBoldIcon } from "../bold/Video";
import { VideoIcon as VideoDuotoneIcon } from "../duotone/Video";
import { VideoIcon as VideoFillIcon } from "../fill/Video";
import { VideoIcon as VideoLightIcon } from "../light/Video";
import { VideoIcon as VideoRegularIcon } from "../regular/Video";
import { VideoIcon as VideoThinIcon } from "../thin/Video";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: VideoThinIcon,
	light: VideoLightIcon,
	regular: VideoRegularIcon,
	bold: VideoBoldIcon,
	fill: VideoFillIcon,
	duotone: VideoDuotoneIcon,
} as const;

export function VideoIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { VideoIcon as Video };
