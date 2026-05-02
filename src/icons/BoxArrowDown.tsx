import { BoxArrowDownIcon as BoxArrowDownBoldIcon } from "../bold/BoxArrowDown";
import { BoxArrowDownIcon as BoxArrowDownDuotoneIcon } from "../duotone/BoxArrowDown";
import { BoxArrowDownIcon as BoxArrowDownFillIcon } from "../fill/BoxArrowDown";
import { BoxArrowDownIcon as BoxArrowDownLightIcon } from "../light/BoxArrowDown";
import { BoxArrowDownIcon as BoxArrowDownRegularIcon } from "../regular/BoxArrowDown";
import { BoxArrowDownIcon as BoxArrowDownThinIcon } from "../thin/BoxArrowDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BoxArrowDownThinIcon,
	light: BoxArrowDownLightIcon,
	regular: BoxArrowDownRegularIcon,
	bold: BoxArrowDownBoldIcon,
	fill: BoxArrowDownFillIcon,
	duotone: BoxArrowDownDuotoneIcon,
} as const;

export function BoxArrowDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BoxArrowDownIcon as BoxArrowDown };
