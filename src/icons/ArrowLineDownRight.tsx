import { ArrowLineDownRightIcon as ArrowLineDownRightBoldIcon } from "../bold/ArrowLineDownRight";
import { ArrowLineDownRightIcon as ArrowLineDownRightDuotoneIcon } from "../duotone/ArrowLineDownRight";
import { ArrowLineDownRightIcon as ArrowLineDownRightFillIcon } from "../fill/ArrowLineDownRight";
import { ArrowLineDownRightIcon as ArrowLineDownRightLightIcon } from "../light/ArrowLineDownRight";
import { ArrowLineDownRightIcon as ArrowLineDownRightRegularIcon } from "../regular/ArrowLineDownRight";
import { ArrowLineDownRightIcon as ArrowLineDownRightThinIcon } from "../thin/ArrowLineDownRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowLineDownRightThinIcon,
	light: ArrowLineDownRightLightIcon,
	regular: ArrowLineDownRightRegularIcon,
	bold: ArrowLineDownRightBoldIcon,
	fill: ArrowLineDownRightFillIcon,
	duotone: ArrowLineDownRightDuotoneIcon,
} as const;

export function ArrowLineDownRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowLineDownRightIcon as ArrowLineDownRight };
