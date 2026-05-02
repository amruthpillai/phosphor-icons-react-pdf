import { ArrowElbowRightDownIcon as ArrowElbowRightDownBoldIcon } from "../bold/ArrowElbowRightDown";
import { ArrowElbowRightDownIcon as ArrowElbowRightDownDuotoneIcon } from "../duotone/ArrowElbowRightDown";
import { ArrowElbowRightDownIcon as ArrowElbowRightDownFillIcon } from "../fill/ArrowElbowRightDown";
import { ArrowElbowRightDownIcon as ArrowElbowRightDownLightIcon } from "../light/ArrowElbowRightDown";
import { ArrowElbowRightDownIcon as ArrowElbowRightDownRegularIcon } from "../regular/ArrowElbowRightDown";
import { ArrowElbowRightDownIcon as ArrowElbowRightDownThinIcon } from "../thin/ArrowElbowRightDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowElbowRightDownThinIcon,
	light: ArrowElbowRightDownLightIcon,
	regular: ArrowElbowRightDownRegularIcon,
	bold: ArrowElbowRightDownBoldIcon,
	fill: ArrowElbowRightDownFillIcon,
	duotone: ArrowElbowRightDownDuotoneIcon,
} as const;

export function ArrowElbowRightDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowElbowRightDownIcon as ArrowElbowRightDown };
