import { TagSimpleIcon as TagSimpleBoldIcon } from "../bold/TagSimple";
import { TagSimpleIcon as TagSimpleDuotoneIcon } from "../duotone/TagSimple";
import { TagSimpleIcon as TagSimpleFillIcon } from "../fill/TagSimple";
import { TagSimpleIcon as TagSimpleLightIcon } from "../light/TagSimple";
import { TagSimpleIcon as TagSimpleRegularIcon } from "../regular/TagSimple";
import { TagSimpleIcon as TagSimpleThinIcon } from "../thin/TagSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TagSimpleThinIcon,
	light: TagSimpleLightIcon,
	regular: TagSimpleRegularIcon,
	bold: TagSimpleBoldIcon,
	fill: TagSimpleFillIcon,
	duotone: TagSimpleDuotoneIcon,
} as const;

export function TagSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TagSimpleIcon as TagSimple };
