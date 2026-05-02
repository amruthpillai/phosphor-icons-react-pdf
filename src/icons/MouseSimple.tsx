import { MouseSimpleIcon as MouseSimpleBoldIcon } from "../bold/MouseSimple";
import { MouseSimpleIcon as MouseSimpleDuotoneIcon } from "../duotone/MouseSimple";
import { MouseSimpleIcon as MouseSimpleFillIcon } from "../fill/MouseSimple";
import { MouseSimpleIcon as MouseSimpleLightIcon } from "../light/MouseSimple";
import { MouseSimpleIcon as MouseSimpleRegularIcon } from "../regular/MouseSimple";
import { MouseSimpleIcon as MouseSimpleThinIcon } from "../thin/MouseSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MouseSimpleThinIcon,
	light: MouseSimpleLightIcon,
	regular: MouseSimpleRegularIcon,
	bold: MouseSimpleBoldIcon,
	fill: MouseSimpleFillIcon,
	duotone: MouseSimpleDuotoneIcon,
} as const;

export function MouseSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MouseSimpleIcon as MouseSimple };
