import { StackSimpleIcon as StackSimpleBoldIcon } from "../bold/StackSimple";
import { StackSimpleIcon as StackSimpleDuotoneIcon } from "../duotone/StackSimple";
import { StackSimpleIcon as StackSimpleFillIcon } from "../fill/StackSimple";
import { StackSimpleIcon as StackSimpleLightIcon } from "../light/StackSimple";
import { StackSimpleIcon as StackSimpleRegularIcon } from "../regular/StackSimple";
import { StackSimpleIcon as StackSimpleThinIcon } from "../thin/StackSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StackSimpleThinIcon,
	light: StackSimpleLightIcon,
	regular: StackSimpleRegularIcon,
	bold: StackSimpleBoldIcon,
	fill: StackSimpleFillIcon,
	duotone: StackSimpleDuotoneIcon,
} as const;

export function StackSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StackSimpleIcon as StackSimple };
