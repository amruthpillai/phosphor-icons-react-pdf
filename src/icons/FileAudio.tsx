import { FileAudioIcon as FileAudioBoldIcon } from "../bold/FileAudio";
import { FileAudioIcon as FileAudioDuotoneIcon } from "../duotone/FileAudio";
import { FileAudioIcon as FileAudioFillIcon } from "../fill/FileAudio";
import { FileAudioIcon as FileAudioLightIcon } from "../light/FileAudio";
import { FileAudioIcon as FileAudioRegularIcon } from "../regular/FileAudio";
import { FileAudioIcon as FileAudioThinIcon } from "../thin/FileAudio";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FileAudioThinIcon,
	light: FileAudioLightIcon,
	regular: FileAudioRegularIcon,
	bold: FileAudioBoldIcon,
	fill: FileAudioFillIcon,
	duotone: FileAudioDuotoneIcon,
} as const;

export function FileAudioIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FileAudioIcon as FileAudio };
