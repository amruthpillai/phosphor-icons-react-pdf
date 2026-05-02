import { PhonePauseIcon as PhonePauseBoldIcon } from "../bold/PhonePause";
import { PhonePauseIcon as PhonePauseDuotoneIcon } from "../duotone/PhonePause";
import { PhonePauseIcon as PhonePauseFillIcon } from "../fill/PhonePause";
import { PhonePauseIcon as PhonePauseLightIcon } from "../light/PhonePause";
import { PhonePauseIcon as PhonePauseRegularIcon } from "../regular/PhonePause";
import { PhonePauseIcon as PhonePauseThinIcon } from "../thin/PhonePause";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PhonePauseThinIcon,
	light: PhonePauseLightIcon,
	regular: PhonePauseRegularIcon,
	bold: PhonePauseBoldIcon,
	fill: PhonePauseFillIcon,
	duotone: PhonePauseDuotoneIcon,
} as const;

export function PhonePauseIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PhonePauseIcon as PhonePause };
