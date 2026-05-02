import { AlignRightSimpleIcon as AlignRightSimpleBoldIcon } from "../bold/AlignRightSimple";
import { AlignRightSimpleIcon as AlignRightSimpleDuotoneIcon } from "../duotone/AlignRightSimple";
import { AlignRightSimpleIcon as AlignRightSimpleFillIcon } from "../fill/AlignRightSimple";
import { AlignRightSimpleIcon as AlignRightSimpleLightIcon } from "../light/AlignRightSimple";
import { AlignRightSimpleIcon as AlignRightSimpleRegularIcon } from "../regular/AlignRightSimple";
import { AlignRightSimpleIcon as AlignRightSimpleThinIcon } from "../thin/AlignRightSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AlignRightSimpleThinIcon,
	light: AlignRightSimpleLightIcon,
	regular: AlignRightSimpleRegularIcon,
	bold: AlignRightSimpleBoldIcon,
	fill: AlignRightSimpleFillIcon,
	duotone: AlignRightSimpleDuotoneIcon,
} as const;

export function AlignRightSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AlignRightSimpleIcon as AlignRightSimple };
