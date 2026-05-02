import { ArrowUUpLeftIcon as ArrowUUpLeftBoldIcon } from "../bold/ArrowUUpLeft";
import { ArrowUUpLeftIcon as ArrowUUpLeftDuotoneIcon } from "../duotone/ArrowUUpLeft";
import { ArrowUUpLeftIcon as ArrowUUpLeftFillIcon } from "../fill/ArrowUUpLeft";
import { ArrowUUpLeftIcon as ArrowUUpLeftLightIcon } from "../light/ArrowUUpLeft";
import { ArrowUUpLeftIcon as ArrowUUpLeftRegularIcon } from "../regular/ArrowUUpLeft";
import { ArrowUUpLeftIcon as ArrowUUpLeftThinIcon } from "../thin/ArrowUUpLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowUUpLeftThinIcon,
	light: ArrowUUpLeftLightIcon,
	regular: ArrowUUpLeftRegularIcon,
	bold: ArrowUUpLeftBoldIcon,
	fill: ArrowUUpLeftFillIcon,
	duotone: ArrowUUpLeftDuotoneIcon,
} as const;

export function ArrowUUpLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowUUpLeftIcon as ArrowUUpLeft };
