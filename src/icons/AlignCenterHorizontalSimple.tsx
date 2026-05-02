import { AlignCenterHorizontalSimpleIcon as AlignCenterHorizontalSimpleBoldIcon } from "../bold/AlignCenterHorizontalSimple";
import { AlignCenterHorizontalSimpleIcon as AlignCenterHorizontalSimpleDuotoneIcon } from "../duotone/AlignCenterHorizontalSimple";
import { AlignCenterHorizontalSimpleIcon as AlignCenterHorizontalSimpleFillIcon } from "../fill/AlignCenterHorizontalSimple";
import { AlignCenterHorizontalSimpleIcon as AlignCenterHorizontalSimpleLightIcon } from "../light/AlignCenterHorizontalSimple";
import { AlignCenterHorizontalSimpleIcon as AlignCenterHorizontalSimpleRegularIcon } from "../regular/AlignCenterHorizontalSimple";
import { AlignCenterHorizontalSimpleIcon as AlignCenterHorizontalSimpleThinIcon } from "../thin/AlignCenterHorizontalSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AlignCenterHorizontalSimpleThinIcon,
	light: AlignCenterHorizontalSimpleLightIcon,
	regular: AlignCenterHorizontalSimpleRegularIcon,
	bold: AlignCenterHorizontalSimpleBoldIcon,
	fill: AlignCenterHorizontalSimpleFillIcon,
	duotone: AlignCenterHorizontalSimpleDuotoneIcon,
} as const;

export function AlignCenterHorizontalSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AlignCenterHorizontalSimpleIcon as AlignCenterHorizontalSimple };
