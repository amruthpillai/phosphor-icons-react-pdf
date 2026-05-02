import { ArrowBendLeftUpIcon as ArrowBendLeftUpBoldIcon } from "../bold/ArrowBendLeftUp";
import { ArrowBendLeftUpIcon as ArrowBendLeftUpDuotoneIcon } from "../duotone/ArrowBendLeftUp";
import { ArrowBendLeftUpIcon as ArrowBendLeftUpFillIcon } from "../fill/ArrowBendLeftUp";
import { ArrowBendLeftUpIcon as ArrowBendLeftUpLightIcon } from "../light/ArrowBendLeftUp";
import { ArrowBendLeftUpIcon as ArrowBendLeftUpRegularIcon } from "../regular/ArrowBendLeftUp";
import { ArrowBendLeftUpIcon as ArrowBendLeftUpThinIcon } from "../thin/ArrowBendLeftUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowBendLeftUpThinIcon,
	light: ArrowBendLeftUpLightIcon,
	regular: ArrowBendLeftUpRegularIcon,
	bold: ArrowBendLeftUpBoldIcon,
	fill: ArrowBendLeftUpFillIcon,
	duotone: ArrowBendLeftUpDuotoneIcon,
} as const;

export function ArrowBendLeftUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowBendLeftUpIcon as ArrowBendLeftUp };
