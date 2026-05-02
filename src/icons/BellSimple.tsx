import { BellSimpleIcon as BellSimpleBoldIcon } from "../bold/BellSimple";
import { BellSimpleIcon as BellSimpleDuotoneIcon } from "../duotone/BellSimple";
import { BellSimpleIcon as BellSimpleFillIcon } from "../fill/BellSimple";
import { BellSimpleIcon as BellSimpleLightIcon } from "../light/BellSimple";
import { BellSimpleIcon as BellSimpleRegularIcon } from "../regular/BellSimple";
import { BellSimpleIcon as BellSimpleThinIcon } from "../thin/BellSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BellSimpleThinIcon,
	light: BellSimpleLightIcon,
	regular: BellSimpleRegularIcon,
	bold: BellSimpleBoldIcon,
	fill: BellSimpleFillIcon,
	duotone: BellSimpleDuotoneIcon,
} as const;

export function BellSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BellSimpleIcon as BellSimple };
