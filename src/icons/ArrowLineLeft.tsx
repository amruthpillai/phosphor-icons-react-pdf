import { ArrowLineLeftIcon as ArrowLineLeftBoldIcon } from "../bold/ArrowLineLeft";
import { ArrowLineLeftIcon as ArrowLineLeftDuotoneIcon } from "../duotone/ArrowLineLeft";
import { ArrowLineLeftIcon as ArrowLineLeftFillIcon } from "../fill/ArrowLineLeft";
import { ArrowLineLeftIcon as ArrowLineLeftLightIcon } from "../light/ArrowLineLeft";
import { ArrowLineLeftIcon as ArrowLineLeftRegularIcon } from "../regular/ArrowLineLeft";
import { ArrowLineLeftIcon as ArrowLineLeftThinIcon } from "../thin/ArrowLineLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowLineLeftThinIcon,
	light: ArrowLineLeftLightIcon,
	regular: ArrowLineLeftRegularIcon,
	bold: ArrowLineLeftBoldIcon,
	fill: ArrowLineLeftFillIcon,
	duotone: ArrowLineLeftDuotoneIcon,
} as const;

export function ArrowLineLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowLineLeftIcon as ArrowLineLeft };
