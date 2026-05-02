import { PauseIcon as PauseBoldIcon } from "../bold/Pause";
import { PauseIcon as PauseDuotoneIcon } from "../duotone/Pause";
import { PauseIcon as PauseFillIcon } from "../fill/Pause";
import { PauseIcon as PauseLightIcon } from "../light/Pause";
import { PauseIcon as PauseRegularIcon } from "../regular/Pause";
import { PauseIcon as PauseThinIcon } from "../thin/Pause";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PauseThinIcon,
	light: PauseLightIcon,
	regular: PauseRegularIcon,
	bold: PauseBoldIcon,
	fill: PauseFillIcon,
	duotone: PauseDuotoneIcon,
} as const;

export function PauseIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PauseIcon as Pause };
