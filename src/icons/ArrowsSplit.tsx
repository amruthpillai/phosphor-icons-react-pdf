import { ArrowsSplitIcon as ArrowsSplitBoldIcon } from "../bold/ArrowsSplit";
import { ArrowsSplitIcon as ArrowsSplitDuotoneIcon } from "../duotone/ArrowsSplit";
import { ArrowsSplitIcon as ArrowsSplitFillIcon } from "../fill/ArrowsSplit";
import { ArrowsSplitIcon as ArrowsSplitLightIcon } from "../light/ArrowsSplit";
import { ArrowsSplitIcon as ArrowsSplitRegularIcon } from "../regular/ArrowsSplit";
import { ArrowsSplitIcon as ArrowsSplitThinIcon } from "../thin/ArrowsSplit";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowsSplitThinIcon,
	light: ArrowsSplitLightIcon,
	regular: ArrowsSplitRegularIcon,
	bold: ArrowsSplitBoldIcon,
	fill: ArrowsSplitFillIcon,
	duotone: ArrowsSplitDuotoneIcon,
} as const;

export function ArrowsSplitIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowsSplitIcon as ArrowsSplit };
