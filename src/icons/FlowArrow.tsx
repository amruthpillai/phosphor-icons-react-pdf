import { FlowArrowIcon as FlowArrowBoldIcon } from "../bold/FlowArrow";
import { FlowArrowIcon as FlowArrowDuotoneIcon } from "../duotone/FlowArrow";
import { FlowArrowIcon as FlowArrowFillIcon } from "../fill/FlowArrow";
import { FlowArrowIcon as FlowArrowLightIcon } from "../light/FlowArrow";
import { FlowArrowIcon as FlowArrowRegularIcon } from "../regular/FlowArrow";
import { FlowArrowIcon as FlowArrowThinIcon } from "../thin/FlowArrow";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FlowArrowThinIcon,
	light: FlowArrowLightIcon,
	regular: FlowArrowRegularIcon,
	bold: FlowArrowBoldIcon,
	fill: FlowArrowFillIcon,
	duotone: FlowArrowDuotoneIcon,
} as const;

export function FlowArrowIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FlowArrowIcon as FlowArrow };
