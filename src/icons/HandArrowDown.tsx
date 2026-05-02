import { HandArrowDownIcon as HandArrowDownBoldIcon } from "../bold/HandArrowDown";
import { HandArrowDownIcon as HandArrowDownDuotoneIcon } from "../duotone/HandArrowDown";
import { HandArrowDownIcon as HandArrowDownFillIcon } from "../fill/HandArrowDown";
import { HandArrowDownIcon as HandArrowDownLightIcon } from "../light/HandArrowDown";
import { HandArrowDownIcon as HandArrowDownRegularIcon } from "../regular/HandArrowDown";
import { HandArrowDownIcon as HandArrowDownThinIcon } from "../thin/HandArrowDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandArrowDownThinIcon,
	light: HandArrowDownLightIcon,
	regular: HandArrowDownRegularIcon,
	bold: HandArrowDownBoldIcon,
	fill: HandArrowDownFillIcon,
	duotone: HandArrowDownDuotoneIcon,
} as const;

export function HandArrowDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandArrowDownIcon as HandArrowDown };
