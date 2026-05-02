import { MicrophoneStageIcon as MicrophoneStageBoldIcon } from "../bold/MicrophoneStage";
import { MicrophoneStageIcon as MicrophoneStageDuotoneIcon } from "../duotone/MicrophoneStage";
import { MicrophoneStageIcon as MicrophoneStageFillIcon } from "../fill/MicrophoneStage";
import { MicrophoneStageIcon as MicrophoneStageLightIcon } from "../light/MicrophoneStage";
import { MicrophoneStageIcon as MicrophoneStageRegularIcon } from "../regular/MicrophoneStage";
import { MicrophoneStageIcon as MicrophoneStageThinIcon } from "../thin/MicrophoneStage";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MicrophoneStageThinIcon,
	light: MicrophoneStageLightIcon,
	regular: MicrophoneStageRegularIcon,
	bold: MicrophoneStageBoldIcon,
	fill: MicrophoneStageFillIcon,
	duotone: MicrophoneStageDuotoneIcon,
} as const;

export function MicrophoneStageIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MicrophoneStageIcon as MicrophoneStage };
