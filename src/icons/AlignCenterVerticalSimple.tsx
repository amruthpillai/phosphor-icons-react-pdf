import { AlignCenterVerticalSimpleIcon as AlignCenterVerticalSimpleBoldIcon } from "../bold/AlignCenterVerticalSimple";
import { AlignCenterVerticalSimpleIcon as AlignCenterVerticalSimpleDuotoneIcon } from "../duotone/AlignCenterVerticalSimple";
import { AlignCenterVerticalSimpleIcon as AlignCenterVerticalSimpleFillIcon } from "../fill/AlignCenterVerticalSimple";
import { AlignCenterVerticalSimpleIcon as AlignCenterVerticalSimpleLightIcon } from "../light/AlignCenterVerticalSimple";
import { AlignCenterVerticalSimpleIcon as AlignCenterVerticalSimpleRegularIcon } from "../regular/AlignCenterVerticalSimple";
import { AlignCenterVerticalSimpleIcon as AlignCenterVerticalSimpleThinIcon } from "../thin/AlignCenterVerticalSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AlignCenterVerticalSimpleThinIcon,
	light: AlignCenterVerticalSimpleLightIcon,
	regular: AlignCenterVerticalSimpleRegularIcon,
	bold: AlignCenterVerticalSimpleBoldIcon,
	fill: AlignCenterVerticalSimpleFillIcon,
	duotone: AlignCenterVerticalSimpleDuotoneIcon,
} as const;

export function AlignCenterVerticalSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AlignCenterVerticalSimpleIcon as AlignCenterVerticalSimple };
