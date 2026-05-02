import { CircleNotchIcon as CircleNotchBoldIcon } from "../bold/CircleNotch";
import { CircleNotchIcon as CircleNotchDuotoneIcon } from "../duotone/CircleNotch";
import { CircleNotchIcon as CircleNotchFillIcon } from "../fill/CircleNotch";
import { CircleNotchIcon as CircleNotchLightIcon } from "../light/CircleNotch";
import { CircleNotchIcon as CircleNotchRegularIcon } from "../regular/CircleNotch";
import { CircleNotchIcon as CircleNotchThinIcon } from "../thin/CircleNotch";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CircleNotchThinIcon,
	light: CircleNotchLightIcon,
	regular: CircleNotchRegularIcon,
	bold: CircleNotchBoldIcon,
	fill: CircleNotchFillIcon,
	duotone: CircleNotchDuotoneIcon,
} as const;

export function CircleNotchIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CircleNotchIcon as CircleNotch };
