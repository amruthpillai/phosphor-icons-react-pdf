import { ArrowFatLineUpIcon as ArrowFatLineUpBoldIcon } from "../bold/ArrowFatLineUp";
import { ArrowFatLineUpIcon as ArrowFatLineUpDuotoneIcon } from "../duotone/ArrowFatLineUp";
import { ArrowFatLineUpIcon as ArrowFatLineUpFillIcon } from "../fill/ArrowFatLineUp";
import { ArrowFatLineUpIcon as ArrowFatLineUpLightIcon } from "../light/ArrowFatLineUp";
import { ArrowFatLineUpIcon as ArrowFatLineUpRegularIcon } from "../regular/ArrowFatLineUp";
import { ArrowFatLineUpIcon as ArrowFatLineUpThinIcon } from "../thin/ArrowFatLineUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowFatLineUpThinIcon,
	light: ArrowFatLineUpLightIcon,
	regular: ArrowFatLineUpRegularIcon,
	bold: ArrowFatLineUpBoldIcon,
	fill: ArrowFatLineUpFillIcon,
	duotone: ArrowFatLineUpDuotoneIcon,
} as const;

export function ArrowFatLineUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowFatLineUpIcon as ArrowFatLineUp };
