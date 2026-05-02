import { SpinnerGapIcon as SpinnerGapBoldIcon } from "../bold/SpinnerGap";
import { SpinnerGapIcon as SpinnerGapDuotoneIcon } from "../duotone/SpinnerGap";
import { SpinnerGapIcon as SpinnerGapFillIcon } from "../fill/SpinnerGap";
import { SpinnerGapIcon as SpinnerGapLightIcon } from "../light/SpinnerGap";
import { SpinnerGapIcon as SpinnerGapRegularIcon } from "../regular/SpinnerGap";
import { SpinnerGapIcon as SpinnerGapThinIcon } from "../thin/SpinnerGap";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SpinnerGapThinIcon,
	light: SpinnerGapLightIcon,
	regular: SpinnerGapRegularIcon,
	bold: SpinnerGapBoldIcon,
	fill: SpinnerGapFillIcon,
	duotone: SpinnerGapDuotoneIcon,
} as const;

export function SpinnerGapIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SpinnerGapIcon as SpinnerGap };
