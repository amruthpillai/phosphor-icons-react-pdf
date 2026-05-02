import { ArrowULeftDownIcon as ArrowULeftDownBoldIcon } from "../bold/ArrowULeftDown";
import { ArrowULeftDownIcon as ArrowULeftDownDuotoneIcon } from "../duotone/ArrowULeftDown";
import { ArrowULeftDownIcon as ArrowULeftDownFillIcon } from "../fill/ArrowULeftDown";
import { ArrowULeftDownIcon as ArrowULeftDownLightIcon } from "../light/ArrowULeftDown";
import { ArrowULeftDownIcon as ArrowULeftDownRegularIcon } from "../regular/ArrowULeftDown";
import { ArrowULeftDownIcon as ArrowULeftDownThinIcon } from "../thin/ArrowULeftDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowULeftDownThinIcon,
	light: ArrowULeftDownLightIcon,
	regular: ArrowULeftDownRegularIcon,
	bold: ArrowULeftDownBoldIcon,
	fill: ArrowULeftDownFillIcon,
	duotone: ArrowULeftDownDuotoneIcon,
} as const;

export function ArrowULeftDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowULeftDownIcon as ArrowULeftDown };
