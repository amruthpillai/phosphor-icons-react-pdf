import { ArrowFatDownIcon as ArrowFatDownBoldIcon } from "../bold/ArrowFatDown";
import { ArrowFatDownIcon as ArrowFatDownDuotoneIcon } from "../duotone/ArrowFatDown";
import { ArrowFatDownIcon as ArrowFatDownFillIcon } from "../fill/ArrowFatDown";
import { ArrowFatDownIcon as ArrowFatDownLightIcon } from "../light/ArrowFatDown";
import { ArrowFatDownIcon as ArrowFatDownRegularIcon } from "../regular/ArrowFatDown";
import { ArrowFatDownIcon as ArrowFatDownThinIcon } from "../thin/ArrowFatDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowFatDownThinIcon,
	light: ArrowFatDownLightIcon,
	regular: ArrowFatDownRegularIcon,
	bold: ArrowFatDownBoldIcon,
	fill: ArrowFatDownFillIcon,
	duotone: ArrowFatDownDuotoneIcon,
} as const;

export function ArrowFatDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowFatDownIcon as ArrowFatDown };
