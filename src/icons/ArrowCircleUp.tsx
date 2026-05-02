import { ArrowCircleUpIcon as ArrowCircleUpBoldIcon } from "../bold/ArrowCircleUp";
import { ArrowCircleUpIcon as ArrowCircleUpDuotoneIcon } from "../duotone/ArrowCircleUp";
import { ArrowCircleUpIcon as ArrowCircleUpFillIcon } from "../fill/ArrowCircleUp";
import { ArrowCircleUpIcon as ArrowCircleUpLightIcon } from "../light/ArrowCircleUp";
import { ArrowCircleUpIcon as ArrowCircleUpRegularIcon } from "../regular/ArrowCircleUp";
import { ArrowCircleUpIcon as ArrowCircleUpThinIcon } from "../thin/ArrowCircleUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowCircleUpThinIcon,
	light: ArrowCircleUpLightIcon,
	regular: ArrowCircleUpRegularIcon,
	bold: ArrowCircleUpBoldIcon,
	fill: ArrowCircleUpFillIcon,
	duotone: ArrowCircleUpDuotoneIcon,
} as const;

export function ArrowCircleUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowCircleUpIcon as ArrowCircleUp };
