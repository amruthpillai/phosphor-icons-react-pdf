import { HandTapIcon as HandTapBoldIcon } from "../bold/HandTap";
import { HandTapIcon as HandTapDuotoneIcon } from "../duotone/HandTap";
import { HandTapIcon as HandTapFillIcon } from "../fill/HandTap";
import { HandTapIcon as HandTapLightIcon } from "../light/HandTap";
import { HandTapIcon as HandTapRegularIcon } from "../regular/HandTap";
import { HandTapIcon as HandTapThinIcon } from "../thin/HandTap";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandTapThinIcon,
	light: HandTapLightIcon,
	regular: HandTapRegularIcon,
	bold: HandTapBoldIcon,
	fill: HandTapFillIcon,
	duotone: HandTapDuotoneIcon,
} as const;

export function HandTapIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandTapIcon as HandTap };
