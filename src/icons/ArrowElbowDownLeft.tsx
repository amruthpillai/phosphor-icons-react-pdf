import { ArrowElbowDownLeftIcon as ArrowElbowDownLeftBoldIcon } from "../bold/ArrowElbowDownLeft";
import { ArrowElbowDownLeftIcon as ArrowElbowDownLeftDuotoneIcon } from "../duotone/ArrowElbowDownLeft";
import { ArrowElbowDownLeftIcon as ArrowElbowDownLeftFillIcon } from "../fill/ArrowElbowDownLeft";
import { ArrowElbowDownLeftIcon as ArrowElbowDownLeftLightIcon } from "../light/ArrowElbowDownLeft";
import { ArrowElbowDownLeftIcon as ArrowElbowDownLeftRegularIcon } from "../regular/ArrowElbowDownLeft";
import { ArrowElbowDownLeftIcon as ArrowElbowDownLeftThinIcon } from "../thin/ArrowElbowDownLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowElbowDownLeftThinIcon,
	light: ArrowElbowDownLeftLightIcon,
	regular: ArrowElbowDownLeftRegularIcon,
	bold: ArrowElbowDownLeftBoldIcon,
	fill: ArrowElbowDownLeftFillIcon,
	duotone: ArrowElbowDownLeftDuotoneIcon,
} as const;

export function ArrowElbowDownLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowElbowDownLeftIcon as ArrowElbowDownLeft };
