import { ArrowElbowLeftIcon as ArrowElbowLeftBoldIcon } from "../bold/ArrowElbowLeft";
import { ArrowElbowLeftIcon as ArrowElbowLeftDuotoneIcon } from "../duotone/ArrowElbowLeft";
import { ArrowElbowLeftIcon as ArrowElbowLeftFillIcon } from "../fill/ArrowElbowLeft";
import { ArrowElbowLeftIcon as ArrowElbowLeftLightIcon } from "../light/ArrowElbowLeft";
import { ArrowElbowLeftIcon as ArrowElbowLeftRegularIcon } from "../regular/ArrowElbowLeft";
import { ArrowElbowLeftIcon as ArrowElbowLeftThinIcon } from "../thin/ArrowElbowLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowElbowLeftThinIcon,
	light: ArrowElbowLeftLightIcon,
	regular: ArrowElbowLeftRegularIcon,
	bold: ArrowElbowLeftBoldIcon,
	fill: ArrowElbowLeftFillIcon,
	duotone: ArrowElbowLeftDuotoneIcon,
} as const;

export function ArrowElbowLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowElbowLeftIcon as ArrowElbowLeft };
