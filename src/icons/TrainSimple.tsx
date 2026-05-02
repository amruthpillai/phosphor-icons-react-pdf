import { TrainSimpleIcon as TrainSimpleBoldIcon } from "../bold/TrainSimple";
import { TrainSimpleIcon as TrainSimpleDuotoneIcon } from "../duotone/TrainSimple";
import { TrainSimpleIcon as TrainSimpleFillIcon } from "../fill/TrainSimple";
import { TrainSimpleIcon as TrainSimpleLightIcon } from "../light/TrainSimple";
import { TrainSimpleIcon as TrainSimpleRegularIcon } from "../regular/TrainSimple";
import { TrainSimpleIcon as TrainSimpleThinIcon } from "../thin/TrainSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TrainSimpleThinIcon,
	light: TrainSimpleLightIcon,
	regular: TrainSimpleRegularIcon,
	bold: TrainSimpleBoldIcon,
	fill: TrainSimpleFillIcon,
	duotone: TrainSimpleDuotoneIcon,
} as const;

export function TrainSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TrainSimpleIcon as TrainSimple };
