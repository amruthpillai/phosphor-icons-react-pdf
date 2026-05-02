import { ArrowSquareUpIcon as ArrowSquareUpBoldIcon } from "../bold/ArrowSquareUp";
import { ArrowSquareUpIcon as ArrowSquareUpDuotoneIcon } from "../duotone/ArrowSquareUp";
import { ArrowSquareUpIcon as ArrowSquareUpFillIcon } from "../fill/ArrowSquareUp";
import { ArrowSquareUpIcon as ArrowSquareUpLightIcon } from "../light/ArrowSquareUp";
import { ArrowSquareUpIcon as ArrowSquareUpRegularIcon } from "../regular/ArrowSquareUp";
import { ArrowSquareUpIcon as ArrowSquareUpThinIcon } from "../thin/ArrowSquareUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowSquareUpThinIcon,
	light: ArrowSquareUpLightIcon,
	regular: ArrowSquareUpRegularIcon,
	bold: ArrowSquareUpBoldIcon,
	fill: ArrowSquareUpFillIcon,
	duotone: ArrowSquareUpDuotoneIcon,
} as const;

export function ArrowSquareUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowSquareUpIcon as ArrowSquareUp };
