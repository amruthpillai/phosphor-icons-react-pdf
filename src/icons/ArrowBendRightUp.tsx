import { ArrowBendRightUpIcon as ArrowBendRightUpBoldIcon } from "../bold/ArrowBendRightUp";
import { ArrowBendRightUpIcon as ArrowBendRightUpDuotoneIcon } from "../duotone/ArrowBendRightUp";
import { ArrowBendRightUpIcon as ArrowBendRightUpFillIcon } from "../fill/ArrowBendRightUp";
import { ArrowBendRightUpIcon as ArrowBendRightUpLightIcon } from "../light/ArrowBendRightUp";
import { ArrowBendRightUpIcon as ArrowBendRightUpRegularIcon } from "../regular/ArrowBendRightUp";
import { ArrowBendRightUpIcon as ArrowBendRightUpThinIcon } from "../thin/ArrowBendRightUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowBendRightUpThinIcon,
	light: ArrowBendRightUpLightIcon,
	regular: ArrowBendRightUpRegularIcon,
	bold: ArrowBendRightUpBoldIcon,
	fill: ArrowBendRightUpFillIcon,
	duotone: ArrowBendRightUpDuotoneIcon,
} as const;

export function ArrowBendRightUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowBendRightUpIcon as ArrowBendRightUp };
