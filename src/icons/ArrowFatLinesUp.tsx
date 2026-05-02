import { ArrowFatLinesUpIcon as ArrowFatLinesUpBoldIcon } from "../bold/ArrowFatLinesUp";
import { ArrowFatLinesUpIcon as ArrowFatLinesUpDuotoneIcon } from "../duotone/ArrowFatLinesUp";
import { ArrowFatLinesUpIcon as ArrowFatLinesUpFillIcon } from "../fill/ArrowFatLinesUp";
import { ArrowFatLinesUpIcon as ArrowFatLinesUpLightIcon } from "../light/ArrowFatLinesUp";
import { ArrowFatLinesUpIcon as ArrowFatLinesUpRegularIcon } from "../regular/ArrowFatLinesUp";
import { ArrowFatLinesUpIcon as ArrowFatLinesUpThinIcon } from "../thin/ArrowFatLinesUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowFatLinesUpThinIcon,
	light: ArrowFatLinesUpLightIcon,
	regular: ArrowFatLinesUpRegularIcon,
	bold: ArrowFatLinesUpBoldIcon,
	fill: ArrowFatLinesUpFillIcon,
	duotone: ArrowFatLinesUpDuotoneIcon,
} as const;

export function ArrowFatLinesUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowFatLinesUpIcon as ArrowFatLinesUp };
