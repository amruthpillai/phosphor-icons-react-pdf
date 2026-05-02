import { ArrowsInSimpleIcon as ArrowsInSimpleBoldIcon } from "../bold/ArrowsInSimple";
import { ArrowsInSimpleIcon as ArrowsInSimpleDuotoneIcon } from "../duotone/ArrowsInSimple";
import { ArrowsInSimpleIcon as ArrowsInSimpleFillIcon } from "../fill/ArrowsInSimple";
import { ArrowsInSimpleIcon as ArrowsInSimpleLightIcon } from "../light/ArrowsInSimple";
import { ArrowsInSimpleIcon as ArrowsInSimpleRegularIcon } from "../regular/ArrowsInSimple";
import { ArrowsInSimpleIcon as ArrowsInSimpleThinIcon } from "../thin/ArrowsInSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ArrowsInSimpleThinIcon,
	light: ArrowsInSimpleLightIcon,
	regular: ArrowsInSimpleRegularIcon,
	bold: ArrowsInSimpleBoldIcon,
	fill: ArrowsInSimpleFillIcon,
	duotone: ArrowsInSimpleDuotoneIcon,
} as const;

export function ArrowsInSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ArrowsInSimpleIcon as ArrowsInSimple };
