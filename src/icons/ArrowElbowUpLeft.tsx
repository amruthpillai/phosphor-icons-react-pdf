import { ArrowElbowUpLeftIcon as ArrowElbowUpLeftBoldIcon } from "../bold/ArrowElbowUpLeft";
import { ArrowElbowUpLeftIcon as ArrowElbowUpLeftDuotoneIcon } from "../duotone/ArrowElbowUpLeft";
import { ArrowElbowUpLeftIcon as ArrowElbowUpLeftFillIcon } from "../fill/ArrowElbowUpLeft";
import { ArrowElbowUpLeftIcon as ArrowElbowUpLeftLightIcon } from "../light/ArrowElbowUpLeft";
import { ArrowElbowUpLeftIcon as ArrowElbowUpLeftRegularIcon } from "../regular/ArrowElbowUpLeft";
import { ArrowElbowUpLeftIcon as ArrowElbowUpLeftThinIcon } from "../thin/ArrowElbowUpLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowElbowUpLeftThinIcon,
	light: ArrowElbowUpLeftLightIcon,
	regular: ArrowElbowUpLeftRegularIcon,
	bold: ArrowElbowUpLeftBoldIcon,
	fill: ArrowElbowUpLeftFillIcon,
	duotone: ArrowElbowUpLeftDuotoneIcon,
} as const;

export function ArrowElbowUpLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowElbowUpLeftIcon as ArrowElbowUpLeft };
