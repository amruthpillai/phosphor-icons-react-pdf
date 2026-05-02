import { ArrowLineDownIcon as ArrowLineDownBoldIcon } from "../bold/ArrowLineDown";
import { ArrowLineDownIcon as ArrowLineDownDuotoneIcon } from "../duotone/ArrowLineDown";
import { ArrowLineDownIcon as ArrowLineDownFillIcon } from "../fill/ArrowLineDown";
import { ArrowLineDownIcon as ArrowLineDownLightIcon } from "../light/ArrowLineDown";
import { ArrowLineDownIcon as ArrowLineDownRegularIcon } from "../regular/ArrowLineDown";
import { ArrowLineDownIcon as ArrowLineDownThinIcon } from "../thin/ArrowLineDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowLineDownThinIcon,
	light: ArrowLineDownLightIcon,
	regular: ArrowLineDownRegularIcon,
	bold: ArrowLineDownBoldIcon,
	fill: ArrowLineDownFillIcon,
	duotone: ArrowLineDownDuotoneIcon,
} as const;

export function ArrowLineDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowLineDownIcon as ArrowLineDown };
