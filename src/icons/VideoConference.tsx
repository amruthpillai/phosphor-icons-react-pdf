import { VideoConferenceIcon as VideoConferenceBoldIcon } from "../bold/VideoConference";
import { VideoConferenceIcon as VideoConferenceDuotoneIcon } from "../duotone/VideoConference";
import { VideoConferenceIcon as VideoConferenceFillIcon } from "../fill/VideoConference";
import { VideoConferenceIcon as VideoConferenceLightIcon } from "../light/VideoConference";
import { VideoConferenceIcon as VideoConferenceRegularIcon } from "../regular/VideoConference";
import { VideoConferenceIcon as VideoConferenceThinIcon } from "../thin/VideoConference";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: VideoConferenceThinIcon,
	light: VideoConferenceLightIcon,
	regular: VideoConferenceRegularIcon,
	bold: VideoConferenceBoldIcon,
	fill: VideoConferenceFillIcon,
	duotone: VideoConferenceDuotoneIcon,
} as const;

export function VideoConferenceIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { VideoConferenceIcon as VideoConference };
