import { FireSimpleIcon as FireSimpleBoldIcon } from "../bold/FireSimple";
import { FireSimpleIcon as FireSimpleDuotoneIcon } from "../duotone/FireSimple";
import { FireSimpleIcon as FireSimpleFillIcon } from "../fill/FireSimple";
import { FireSimpleIcon as FireSimpleLightIcon } from "../light/FireSimple";
import { FireSimpleIcon as FireSimpleRegularIcon } from "../regular/FireSimple";
import { FireSimpleIcon as FireSimpleThinIcon } from "../thin/FireSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FireSimpleThinIcon,
	light: FireSimpleLightIcon,
	regular: FireSimpleRegularIcon,
	bold: FireSimpleBoldIcon,
	fill: FireSimpleFillIcon,
	duotone: FireSimpleDuotoneIcon,
} as const;

export function FireSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FireSimpleIcon as FireSimple };
