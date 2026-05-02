import { ArrowLineDownLeftIcon as ArrowLineDownLeftBoldIcon } from "../bold/ArrowLineDownLeft";
import { ArrowLineDownLeftIcon as ArrowLineDownLeftDuotoneIcon } from "../duotone/ArrowLineDownLeft";
import { ArrowLineDownLeftIcon as ArrowLineDownLeftFillIcon } from "../fill/ArrowLineDownLeft";
import { ArrowLineDownLeftIcon as ArrowLineDownLeftLightIcon } from "../light/ArrowLineDownLeft";
import { ArrowLineDownLeftIcon as ArrowLineDownLeftRegularIcon } from "../regular/ArrowLineDownLeft";
import { ArrowLineDownLeftIcon as ArrowLineDownLeftThinIcon } from "../thin/ArrowLineDownLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowLineDownLeftThinIcon,
	light: ArrowLineDownLeftLightIcon,
	regular: ArrowLineDownLeftRegularIcon,
	bold: ArrowLineDownLeftBoldIcon,
	fill: ArrowLineDownLeftFillIcon,
	duotone: ArrowLineDownLeftDuotoneIcon,
} as const;

export function ArrowLineDownLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowLineDownLeftIcon as ArrowLineDownLeft };
