import { ArrowFatUpIcon as ArrowFatUpBoldIcon } from "../bold/ArrowFatUp";
import { ArrowFatUpIcon as ArrowFatUpDuotoneIcon } from "../duotone/ArrowFatUp";
import { ArrowFatUpIcon as ArrowFatUpFillIcon } from "../fill/ArrowFatUp";
import { ArrowFatUpIcon as ArrowFatUpLightIcon } from "../light/ArrowFatUp";
import { ArrowFatUpIcon as ArrowFatUpRegularIcon } from "../regular/ArrowFatUp";
import { ArrowFatUpIcon as ArrowFatUpThinIcon } from "../thin/ArrowFatUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowFatUpThinIcon,
	light: ArrowFatUpLightIcon,
	regular: ArrowFatUpRegularIcon,
	bold: ArrowFatUpBoldIcon,
	fill: ArrowFatUpFillIcon,
	duotone: ArrowFatUpDuotoneIcon,
} as const;

export function ArrowFatUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowFatUpIcon as ArrowFatUp };
