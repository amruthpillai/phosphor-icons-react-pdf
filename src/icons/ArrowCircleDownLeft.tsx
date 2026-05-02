import { ArrowCircleDownLeftIcon as ArrowCircleDownLeftBoldIcon } from "../bold/ArrowCircleDownLeft";
import { ArrowCircleDownLeftIcon as ArrowCircleDownLeftDuotoneIcon } from "../duotone/ArrowCircleDownLeft";
import { ArrowCircleDownLeftIcon as ArrowCircleDownLeftFillIcon } from "../fill/ArrowCircleDownLeft";
import { ArrowCircleDownLeftIcon as ArrowCircleDownLeftLightIcon } from "../light/ArrowCircleDownLeft";
import { ArrowCircleDownLeftIcon as ArrowCircleDownLeftRegularIcon } from "../regular/ArrowCircleDownLeft";
import { ArrowCircleDownLeftIcon as ArrowCircleDownLeftThinIcon } from "../thin/ArrowCircleDownLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowCircleDownLeftThinIcon,
	light: ArrowCircleDownLeftLightIcon,
	regular: ArrowCircleDownLeftRegularIcon,
	bold: ArrowCircleDownLeftBoldIcon,
	fill: ArrowCircleDownLeftFillIcon,
	duotone: ArrowCircleDownLeftDuotoneIcon,
} as const;

export function ArrowCircleDownLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowCircleDownLeftIcon as ArrowCircleDownLeft };
