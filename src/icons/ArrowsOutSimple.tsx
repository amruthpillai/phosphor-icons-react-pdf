import { ArrowsOutSimpleIcon as ArrowsOutSimpleBoldIcon } from "../bold/ArrowsOutSimple";
import { ArrowsOutSimpleIcon as ArrowsOutSimpleDuotoneIcon } from "../duotone/ArrowsOutSimple";
import { ArrowsOutSimpleIcon as ArrowsOutSimpleFillIcon } from "../fill/ArrowsOutSimple";
import { ArrowsOutSimpleIcon as ArrowsOutSimpleLightIcon } from "../light/ArrowsOutSimple";
import { ArrowsOutSimpleIcon as ArrowsOutSimpleRegularIcon } from "../regular/ArrowsOutSimple";
import { ArrowsOutSimpleIcon as ArrowsOutSimpleThinIcon } from "../thin/ArrowsOutSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowsOutSimpleThinIcon,
	light: ArrowsOutSimpleLightIcon,
	regular: ArrowsOutSimpleRegularIcon,
	bold: ArrowsOutSimpleBoldIcon,
	fill: ArrowsOutSimpleFillIcon,
	duotone: ArrowsOutSimpleDuotoneIcon,
} as const;

export function ArrowsOutSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowsOutSimpleIcon as ArrowsOutSimple };
