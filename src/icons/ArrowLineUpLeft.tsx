import { ArrowLineUpLeftIcon as ArrowLineUpLeftBoldIcon } from "../bold/ArrowLineUpLeft";
import { ArrowLineUpLeftIcon as ArrowLineUpLeftDuotoneIcon } from "../duotone/ArrowLineUpLeft";
import { ArrowLineUpLeftIcon as ArrowLineUpLeftFillIcon } from "../fill/ArrowLineUpLeft";
import { ArrowLineUpLeftIcon as ArrowLineUpLeftLightIcon } from "../light/ArrowLineUpLeft";
import { ArrowLineUpLeftIcon as ArrowLineUpLeftRegularIcon } from "../regular/ArrowLineUpLeft";
import { ArrowLineUpLeftIcon as ArrowLineUpLeftThinIcon } from "../thin/ArrowLineUpLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowLineUpLeftThinIcon,
	light: ArrowLineUpLeftLightIcon,
	regular: ArrowLineUpLeftRegularIcon,
	bold: ArrowLineUpLeftBoldIcon,
	fill: ArrowLineUpLeftFillIcon,
	duotone: ArrowLineUpLeftDuotoneIcon,
} as const;

export function ArrowLineUpLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowLineUpLeftIcon as ArrowLineUpLeft };
