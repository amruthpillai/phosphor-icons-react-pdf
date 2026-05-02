import { ArrowLineUpIcon as ArrowLineUpBoldIcon } from "../bold/ArrowLineUp";
import { ArrowLineUpIcon as ArrowLineUpDuotoneIcon } from "../duotone/ArrowLineUp";
import { ArrowLineUpIcon as ArrowLineUpFillIcon } from "../fill/ArrowLineUp";
import { ArrowLineUpIcon as ArrowLineUpLightIcon } from "../light/ArrowLineUp";
import { ArrowLineUpIcon as ArrowLineUpRegularIcon } from "../regular/ArrowLineUp";
import { ArrowLineUpIcon as ArrowLineUpThinIcon } from "../thin/ArrowLineUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowLineUpThinIcon,
	light: ArrowLineUpLightIcon,
	regular: ArrowLineUpRegularIcon,
	bold: ArrowLineUpBoldIcon,
	fill: ArrowLineUpFillIcon,
	duotone: ArrowLineUpDuotoneIcon,
} as const;

export function ArrowLineUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowLineUpIcon as ArrowLineUp };
