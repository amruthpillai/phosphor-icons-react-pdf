import { AnchorSimpleIcon as AnchorSimpleBoldIcon } from "../bold/AnchorSimple";
import { AnchorSimpleIcon as AnchorSimpleDuotoneIcon } from "../duotone/AnchorSimple";
import { AnchorSimpleIcon as AnchorSimpleFillIcon } from "../fill/AnchorSimple";
import { AnchorSimpleIcon as AnchorSimpleLightIcon } from "../light/AnchorSimple";
import { AnchorSimpleIcon as AnchorSimpleRegularIcon } from "../regular/AnchorSimple";
import { AnchorSimpleIcon as AnchorSimpleThinIcon } from "../thin/AnchorSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AnchorSimpleThinIcon,
	light: AnchorSimpleLightIcon,
	regular: AnchorSimpleRegularIcon,
	bold: AnchorSimpleBoldIcon,
	fill: AnchorSimpleFillIcon,
	duotone: AnchorSimpleDuotoneIcon,
} as const;

export function AnchorSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AnchorSimpleIcon as AnchorSimple };
