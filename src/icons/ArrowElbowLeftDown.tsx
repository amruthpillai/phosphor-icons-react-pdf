import { ArrowElbowLeftDownIcon as ArrowElbowLeftDownBoldIcon } from "../bold/ArrowElbowLeftDown";
import { ArrowElbowLeftDownIcon as ArrowElbowLeftDownDuotoneIcon } from "../duotone/ArrowElbowLeftDown";
import { ArrowElbowLeftDownIcon as ArrowElbowLeftDownFillIcon } from "../fill/ArrowElbowLeftDown";
import { ArrowElbowLeftDownIcon as ArrowElbowLeftDownLightIcon } from "../light/ArrowElbowLeftDown";
import { ArrowElbowLeftDownIcon as ArrowElbowLeftDownRegularIcon } from "../regular/ArrowElbowLeftDown";
import { ArrowElbowLeftDownIcon as ArrowElbowLeftDownThinIcon } from "../thin/ArrowElbowLeftDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowElbowLeftDownThinIcon,
	light: ArrowElbowLeftDownLightIcon,
	regular: ArrowElbowLeftDownRegularIcon,
	bold: ArrowElbowLeftDownBoldIcon,
	fill: ArrowElbowLeftDownFillIcon,
	duotone: ArrowElbowLeftDownDuotoneIcon,
} as const;

export function ArrowElbowLeftDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowElbowLeftDownIcon as ArrowElbowLeftDown };
