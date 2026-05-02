import { ArrowULeftUpIcon as ArrowULeftUpBoldIcon } from "../bold/ArrowULeftUp";
import { ArrowULeftUpIcon as ArrowULeftUpDuotoneIcon } from "../duotone/ArrowULeftUp";
import { ArrowULeftUpIcon as ArrowULeftUpFillIcon } from "../fill/ArrowULeftUp";
import { ArrowULeftUpIcon as ArrowULeftUpLightIcon } from "../light/ArrowULeftUp";
import { ArrowULeftUpIcon as ArrowULeftUpRegularIcon } from "../regular/ArrowULeftUp";
import { ArrowULeftUpIcon as ArrowULeftUpThinIcon } from "../thin/ArrowULeftUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowULeftUpThinIcon,
	light: ArrowULeftUpLightIcon,
	regular: ArrowULeftUpRegularIcon,
	bold: ArrowULeftUpBoldIcon,
	fill: ArrowULeftUpFillIcon,
	duotone: ArrowULeftUpDuotoneIcon,
} as const;

export function ArrowULeftUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowULeftUpIcon as ArrowULeftUp };
