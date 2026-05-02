import { PlayIcon as PlayBoldIcon } from "../bold/Play";
import { PlayIcon as PlayDuotoneIcon } from "../duotone/Play";
import { PlayIcon as PlayFillIcon } from "../fill/Play";
import { PlayIcon as PlayLightIcon } from "../light/Play";
import { PlayIcon as PlayRegularIcon } from "../regular/Play";
import { PlayIcon as PlayThinIcon } from "../thin/Play";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PlayThinIcon,
	light: PlayLightIcon,
	regular: PlayRegularIcon,
	bold: PlayBoldIcon,
	fill: PlayFillIcon,
	duotone: PlayDuotoneIcon,
} as const;

export function PlayIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PlayIcon as Play };
