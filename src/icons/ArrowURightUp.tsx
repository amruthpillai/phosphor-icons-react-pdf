import { ArrowURightUpIcon as ArrowURightUpBoldIcon } from "../bold/ArrowURightUp";
import { ArrowURightUpIcon as ArrowURightUpDuotoneIcon } from "../duotone/ArrowURightUp";
import { ArrowURightUpIcon as ArrowURightUpFillIcon } from "../fill/ArrowURightUp";
import { ArrowURightUpIcon as ArrowURightUpLightIcon } from "../light/ArrowURightUp";
import { ArrowURightUpIcon as ArrowURightUpRegularIcon } from "../regular/ArrowURightUp";
import { ArrowURightUpIcon as ArrowURightUpThinIcon } from "../thin/ArrowURightUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowURightUpThinIcon,
	light: ArrowURightUpLightIcon,
	regular: ArrowURightUpRegularIcon,
	bold: ArrowURightUpBoldIcon,
	fill: ArrowURightUpFillIcon,
	duotone: ArrowURightUpDuotoneIcon,
} as const;

export function ArrowURightUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowURightUpIcon as ArrowURightUp };
