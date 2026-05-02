import { BagSimpleIcon as BagSimpleBoldIcon } from "../bold/BagSimple";
import { BagSimpleIcon as BagSimpleDuotoneIcon } from "../duotone/BagSimple";
import { BagSimpleIcon as BagSimpleFillIcon } from "../fill/BagSimple";
import { BagSimpleIcon as BagSimpleLightIcon } from "../light/BagSimple";
import { BagSimpleIcon as BagSimpleRegularIcon } from "../regular/BagSimple";
import { BagSimpleIcon as BagSimpleThinIcon } from "../thin/BagSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BagSimpleThinIcon,
	light: BagSimpleLightIcon,
	regular: BagSimpleRegularIcon,
	bold: BagSimpleBoldIcon,
	fill: BagSimpleFillIcon,
	duotone: BagSimpleDuotoneIcon,
} as const;

export function BagSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BagSimpleIcon as BagSimple };
