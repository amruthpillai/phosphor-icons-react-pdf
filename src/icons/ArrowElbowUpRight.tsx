import { ArrowElbowUpRightIcon as ArrowElbowUpRightBoldIcon } from "../bold/ArrowElbowUpRight";
import { ArrowElbowUpRightIcon as ArrowElbowUpRightDuotoneIcon } from "../duotone/ArrowElbowUpRight";
import { ArrowElbowUpRightIcon as ArrowElbowUpRightFillIcon } from "../fill/ArrowElbowUpRight";
import { ArrowElbowUpRightIcon as ArrowElbowUpRightLightIcon } from "../light/ArrowElbowUpRight";
import { ArrowElbowUpRightIcon as ArrowElbowUpRightRegularIcon } from "../regular/ArrowElbowUpRight";
import { ArrowElbowUpRightIcon as ArrowElbowUpRightThinIcon } from "../thin/ArrowElbowUpRight";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowElbowUpRightThinIcon,
	light: ArrowElbowUpRightLightIcon,
	regular: ArrowElbowUpRightRegularIcon,
	bold: ArrowElbowUpRightBoldIcon,
	fill: ArrowElbowUpRightFillIcon,
	duotone: ArrowElbowUpRightDuotoneIcon,
} as const;

export function ArrowElbowUpRightIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowElbowUpRightIcon as ArrowElbowUpRight };
