import { ArrowElbowRightIcon as ArrowElbowRightBoldIcon } from "../bold/ArrowElbowRight";
import { ArrowElbowRightIcon as ArrowElbowRightDuotoneIcon } from "../duotone/ArrowElbowRight";
import { ArrowElbowRightIcon as ArrowElbowRightFillIcon } from "../fill/ArrowElbowRight";
import { ArrowElbowRightIcon as ArrowElbowRightLightIcon } from "../light/ArrowElbowRight";
import { ArrowElbowRightIcon as ArrowElbowRightRegularIcon } from "../regular/ArrowElbowRight";
import { ArrowElbowRightIcon as ArrowElbowRightThinIcon } from "../thin/ArrowElbowRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowElbowRightThinIcon,
	light: ArrowElbowRightLightIcon,
	regular: ArrowElbowRightRegularIcon,
	bold: ArrowElbowRightBoldIcon,
	fill: ArrowElbowRightFillIcon,
	duotone: ArrowElbowRightDuotoneIcon,
} as const;

export function ArrowElbowRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowElbowRightIcon as ArrowElbowRight };
