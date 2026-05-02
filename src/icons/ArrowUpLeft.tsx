import { ArrowUpLeftIcon as ArrowUpLeftBoldIcon } from "../bold/ArrowUpLeft";
import { ArrowUpLeftIcon as ArrowUpLeftDuotoneIcon } from "../duotone/ArrowUpLeft";
import { ArrowUpLeftIcon as ArrowUpLeftFillIcon } from "../fill/ArrowUpLeft";
import { ArrowUpLeftIcon as ArrowUpLeftLightIcon } from "../light/ArrowUpLeft";
import { ArrowUpLeftIcon as ArrowUpLeftRegularIcon } from "../regular/ArrowUpLeft";
import { ArrowUpLeftIcon as ArrowUpLeftThinIcon } from "../thin/ArrowUpLeft";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowUpLeftThinIcon,
	light: ArrowUpLeftLightIcon,
	regular: ArrowUpLeftRegularIcon,
	bold: ArrowUpLeftBoldIcon,
	fill: ArrowUpLeftFillIcon,
	duotone: ArrowUpLeftDuotoneIcon,
} as const;

export function ArrowUpLeftIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowUpLeftIcon as ArrowUpLeft };
