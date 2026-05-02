import { ArrowCircleUpLeftIcon as ArrowCircleUpLeftBoldIcon } from "../bold/ArrowCircleUpLeft";
import { ArrowCircleUpLeftIcon as ArrowCircleUpLeftDuotoneIcon } from "../duotone/ArrowCircleUpLeft";
import { ArrowCircleUpLeftIcon as ArrowCircleUpLeftFillIcon } from "../fill/ArrowCircleUpLeft";
import { ArrowCircleUpLeftIcon as ArrowCircleUpLeftLightIcon } from "../light/ArrowCircleUpLeft";
import { ArrowCircleUpLeftIcon as ArrowCircleUpLeftRegularIcon } from "../regular/ArrowCircleUpLeft";
import { ArrowCircleUpLeftIcon as ArrowCircleUpLeftThinIcon } from "../thin/ArrowCircleUpLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowCircleUpLeftThinIcon,
	light: ArrowCircleUpLeftLightIcon,
	regular: ArrowCircleUpLeftRegularIcon,
	bold: ArrowCircleUpLeftBoldIcon,
	fill: ArrowCircleUpLeftFillIcon,
	duotone: ArrowCircleUpLeftDuotoneIcon,
} as const;

export function ArrowCircleUpLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowCircleUpLeftIcon as ArrowCircleUpLeft };
