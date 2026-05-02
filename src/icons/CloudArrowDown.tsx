import { CloudArrowDownIcon as CloudArrowDownBoldIcon } from "../bold/CloudArrowDown";
import { CloudArrowDownIcon as CloudArrowDownDuotoneIcon } from "../duotone/CloudArrowDown";
import { CloudArrowDownIcon as CloudArrowDownFillIcon } from "../fill/CloudArrowDown";
import { CloudArrowDownIcon as CloudArrowDownLightIcon } from "../light/CloudArrowDown";
import { CloudArrowDownIcon as CloudArrowDownRegularIcon } from "../regular/CloudArrowDown";
import { CloudArrowDownIcon as CloudArrowDownThinIcon } from "../thin/CloudArrowDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CloudArrowDownThinIcon,
	light: CloudArrowDownLightIcon,
	regular: CloudArrowDownRegularIcon,
	bold: CloudArrowDownBoldIcon,
	fill: CloudArrowDownFillIcon,
	duotone: CloudArrowDownDuotoneIcon,
} as const;

export function CloudArrowDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CloudArrowDownIcon as CloudArrowDown };
