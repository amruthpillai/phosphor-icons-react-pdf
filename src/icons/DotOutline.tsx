import { DotOutlineIcon as DotOutlineBoldIcon } from "../bold/DotOutline";
import { DotOutlineIcon as DotOutlineDuotoneIcon } from "../duotone/DotOutline";
import { DotOutlineIcon as DotOutlineFillIcon } from "../fill/DotOutline";
import { DotOutlineIcon as DotOutlineLightIcon } from "../light/DotOutline";
import { DotOutlineIcon as DotOutlineRegularIcon } from "../regular/DotOutline";
import { DotOutlineIcon as DotOutlineThinIcon } from "../thin/DotOutline";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DotOutlineThinIcon,
	light: DotOutlineLightIcon,
	regular: DotOutlineRegularIcon,
	bold: DotOutlineBoldIcon,
	fill: DotOutlineFillIcon,
	duotone: DotOutlineDuotoneIcon,
} as const;

export function DotOutlineIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DotOutlineIcon as DotOutline };
