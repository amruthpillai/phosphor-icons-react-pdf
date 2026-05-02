import { AsteriskSimpleIcon as AsteriskSimpleBoldIcon } from "../bold/AsteriskSimple";
import { AsteriskSimpleIcon as AsteriskSimpleDuotoneIcon } from "../duotone/AsteriskSimple";
import { AsteriskSimpleIcon as AsteriskSimpleFillIcon } from "../fill/AsteriskSimple";
import { AsteriskSimpleIcon as AsteriskSimpleLightIcon } from "../light/AsteriskSimple";
import { AsteriskSimpleIcon as AsteriskSimpleRegularIcon } from "../regular/AsteriskSimple";
import { AsteriskSimpleIcon as AsteriskSimpleThinIcon } from "../thin/AsteriskSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AsteriskSimpleThinIcon,
	light: AsteriskSimpleLightIcon,
	regular: AsteriskSimpleRegularIcon,
	bold: AsteriskSimpleBoldIcon,
	fill: AsteriskSimpleFillIcon,
	duotone: AsteriskSimpleDuotoneIcon,
} as const;

export function AsteriskSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AsteriskSimpleIcon as AsteriskSimple };
