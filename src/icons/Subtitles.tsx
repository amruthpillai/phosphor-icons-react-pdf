import { SubtitlesIcon as SubtitlesBoldIcon } from "../bold/Subtitles";
import { SubtitlesIcon as SubtitlesDuotoneIcon } from "../duotone/Subtitles";
import { SubtitlesIcon as SubtitlesFillIcon } from "../fill/Subtitles";
import { SubtitlesIcon as SubtitlesLightIcon } from "../light/Subtitles";
import { SubtitlesIcon as SubtitlesRegularIcon } from "../regular/Subtitles";
import { SubtitlesIcon as SubtitlesThinIcon } from "../thin/Subtitles";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SubtitlesThinIcon,
	light: SubtitlesLightIcon,
	regular: SubtitlesRegularIcon,
	bold: SubtitlesBoldIcon,
	fill: SubtitlesFillIcon,
	duotone: SubtitlesDuotoneIcon,
} as const;

export function SubtitlesIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SubtitlesIcon as Subtitles };
