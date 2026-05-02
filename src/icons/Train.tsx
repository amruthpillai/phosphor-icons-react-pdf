import { TrainIcon as TrainBoldIcon } from "../bold/Train";
import { TrainIcon as TrainDuotoneIcon } from "../duotone/Train";
import { TrainIcon as TrainFillIcon } from "../fill/Train";
import { TrainIcon as TrainLightIcon } from "../light/Train";
import { TrainIcon as TrainRegularIcon } from "../regular/Train";
import { TrainIcon as TrainThinIcon } from "../thin/Train";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TrainThinIcon,
	light: TrainLightIcon,
	regular: TrainRegularIcon,
	bold: TrainBoldIcon,
	fill: TrainFillIcon,
	duotone: TrainDuotoneIcon,
} as const;

export function TrainIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TrainIcon as Train };
