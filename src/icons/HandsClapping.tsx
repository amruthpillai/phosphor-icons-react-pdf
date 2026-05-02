import { HandsClappingIcon as HandsClappingBoldIcon } from "../bold/HandsClapping";
import { HandsClappingIcon as HandsClappingDuotoneIcon } from "../duotone/HandsClapping";
import { HandsClappingIcon as HandsClappingFillIcon } from "../fill/HandsClapping";
import { HandsClappingIcon as HandsClappingLightIcon } from "../light/HandsClapping";
import { HandsClappingIcon as HandsClappingRegularIcon } from "../regular/HandsClapping";
import { HandsClappingIcon as HandsClappingThinIcon } from "../thin/HandsClapping";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandsClappingThinIcon,
	light: HandsClappingLightIcon,
	regular: HandsClappingRegularIcon,
	bold: HandsClappingBoldIcon,
	fill: HandsClappingFillIcon,
	duotone: HandsClappingDuotoneIcon,
} as const;

export function HandsClappingIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandsClappingIcon as HandsClapping };
