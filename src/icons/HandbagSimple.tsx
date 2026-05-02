import { HandbagSimpleIcon as HandbagSimpleBoldIcon } from "../bold/HandbagSimple";
import { HandbagSimpleIcon as HandbagSimpleDuotoneIcon } from "../duotone/HandbagSimple";
import { HandbagSimpleIcon as HandbagSimpleFillIcon } from "../fill/HandbagSimple";
import { HandbagSimpleIcon as HandbagSimpleLightIcon } from "../light/HandbagSimple";
import { HandbagSimpleIcon as HandbagSimpleRegularIcon } from "../regular/HandbagSimple";
import { HandbagSimpleIcon as HandbagSimpleThinIcon } from "../thin/HandbagSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandbagSimpleThinIcon,
	light: HandbagSimpleLightIcon,
	regular: HandbagSimpleRegularIcon,
	bold: HandbagSimpleBoldIcon,
	fill: HandbagSimpleFillIcon,
	duotone: HandbagSimpleDuotoneIcon,
} as const;

export function HandbagSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandbagSimpleIcon as HandbagSimple };
