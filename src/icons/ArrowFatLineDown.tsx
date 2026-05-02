import { ArrowFatLineDownIcon as ArrowFatLineDownBoldIcon } from "../bold/ArrowFatLineDown";
import { ArrowFatLineDownIcon as ArrowFatLineDownDuotoneIcon } from "../duotone/ArrowFatLineDown";
import { ArrowFatLineDownIcon as ArrowFatLineDownFillIcon } from "../fill/ArrowFatLineDown";
import { ArrowFatLineDownIcon as ArrowFatLineDownLightIcon } from "../light/ArrowFatLineDown";
import { ArrowFatLineDownIcon as ArrowFatLineDownRegularIcon } from "../regular/ArrowFatLineDown";
import { ArrowFatLineDownIcon as ArrowFatLineDownThinIcon } from "../thin/ArrowFatLineDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowFatLineDownThinIcon,
	light: ArrowFatLineDownLightIcon,
	regular: ArrowFatLineDownRegularIcon,
	bold: ArrowFatLineDownBoldIcon,
	fill: ArrowFatLineDownFillIcon,
	duotone: ArrowFatLineDownDuotoneIcon,
} as const;

export function ArrowFatLineDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowFatLineDownIcon as ArrowFatLineDown };
