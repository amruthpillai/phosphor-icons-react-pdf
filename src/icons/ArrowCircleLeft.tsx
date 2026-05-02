import { ArrowCircleLeftIcon as ArrowCircleLeftBoldIcon } from "../bold/ArrowCircleLeft";
import { ArrowCircleLeftIcon as ArrowCircleLeftDuotoneIcon } from "../duotone/ArrowCircleLeft";
import { ArrowCircleLeftIcon as ArrowCircleLeftFillIcon } from "../fill/ArrowCircleLeft";
import { ArrowCircleLeftIcon as ArrowCircleLeftLightIcon } from "../light/ArrowCircleLeft";
import { ArrowCircleLeftIcon as ArrowCircleLeftRegularIcon } from "../regular/ArrowCircleLeft";
import { ArrowCircleLeftIcon as ArrowCircleLeftThinIcon } from "../thin/ArrowCircleLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowCircleLeftThinIcon,
	light: ArrowCircleLeftLightIcon,
	regular: ArrowCircleLeftRegularIcon,
	bold: ArrowCircleLeftBoldIcon,
	fill: ArrowCircleLeftFillIcon,
	duotone: ArrowCircleLeftDuotoneIcon,
} as const;

export function ArrowCircleLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowCircleLeftIcon as ArrowCircleLeft };
