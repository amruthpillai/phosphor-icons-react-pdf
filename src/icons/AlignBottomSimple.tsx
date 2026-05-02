import { AlignBottomSimpleIcon as AlignBottomSimpleBoldIcon } from "../bold/AlignBottomSimple";
import { AlignBottomSimpleIcon as AlignBottomSimpleDuotoneIcon } from "../duotone/AlignBottomSimple";
import { AlignBottomSimpleIcon as AlignBottomSimpleFillIcon } from "../fill/AlignBottomSimple";
import { AlignBottomSimpleIcon as AlignBottomSimpleLightIcon } from "../light/AlignBottomSimple";
import { AlignBottomSimpleIcon as AlignBottomSimpleRegularIcon } from "../regular/AlignBottomSimple";
import { AlignBottomSimpleIcon as AlignBottomSimpleThinIcon } from "../thin/AlignBottomSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AlignBottomSimpleThinIcon,
	light: AlignBottomSimpleLightIcon,
	regular: AlignBottomSimpleRegularIcon,
	bold: AlignBottomSimpleBoldIcon,
	fill: AlignBottomSimpleFillIcon,
	duotone: AlignBottomSimpleDuotoneIcon,
} as const;

export function AlignBottomSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AlignBottomSimpleIcon as AlignBottomSimple };
