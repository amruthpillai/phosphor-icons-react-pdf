import { AlignLeftSimpleIcon as AlignLeftSimpleBoldIcon } from "../bold/AlignLeftSimple";
import { AlignLeftSimpleIcon as AlignLeftSimpleDuotoneIcon } from "../duotone/AlignLeftSimple";
import { AlignLeftSimpleIcon as AlignLeftSimpleFillIcon } from "../fill/AlignLeftSimple";
import { AlignLeftSimpleIcon as AlignLeftSimpleLightIcon } from "../light/AlignLeftSimple";
import { AlignLeftSimpleIcon as AlignLeftSimpleRegularIcon } from "../regular/AlignLeftSimple";
import { AlignLeftSimpleIcon as AlignLeftSimpleThinIcon } from "../thin/AlignLeftSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AlignLeftSimpleThinIcon,
	light: AlignLeftSimpleLightIcon,
	regular: AlignLeftSimpleRegularIcon,
	bold: AlignLeftSimpleBoldIcon,
	fill: AlignLeftSimpleFillIcon,
	duotone: AlignLeftSimpleDuotoneIcon,
} as const;

export function AlignLeftSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AlignLeftSimpleIcon as AlignLeftSimple };
