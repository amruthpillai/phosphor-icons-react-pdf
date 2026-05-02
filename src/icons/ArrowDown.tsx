import { ArrowDownIcon as ArrowDownBoldIcon } from "../bold/ArrowDown";
import { ArrowDownIcon as ArrowDownDuotoneIcon } from "../duotone/ArrowDown";
import { ArrowDownIcon as ArrowDownFillIcon } from "../fill/ArrowDown";
import { ArrowDownIcon as ArrowDownLightIcon } from "../light/ArrowDown";
import { ArrowDownIcon as ArrowDownRegularIcon } from "../regular/ArrowDown";
import { ArrowDownIcon as ArrowDownThinIcon } from "../thin/ArrowDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowDownThinIcon,
	light: ArrowDownLightIcon,
	regular: ArrowDownRegularIcon,
	bold: ArrowDownBoldIcon,
	fill: ArrowDownFillIcon,
	duotone: ArrowDownDuotoneIcon,
} as const;

export function ArrowDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowDownIcon as ArrowDown };
