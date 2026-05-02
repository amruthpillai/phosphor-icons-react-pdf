import { CrosshairSimpleIcon as CrosshairSimpleBoldIcon } from "../bold/CrosshairSimple";
import { CrosshairSimpleIcon as CrosshairSimpleDuotoneIcon } from "../duotone/CrosshairSimple";
import { CrosshairSimpleIcon as CrosshairSimpleFillIcon } from "../fill/CrosshairSimple";
import { CrosshairSimpleIcon as CrosshairSimpleLightIcon } from "../light/CrosshairSimple";
import { CrosshairSimpleIcon as CrosshairSimpleRegularIcon } from "../regular/CrosshairSimple";
import { CrosshairSimpleIcon as CrosshairSimpleThinIcon } from "../thin/CrosshairSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CrosshairSimpleThinIcon,
	light: CrosshairSimpleLightIcon,
	regular: CrosshairSimpleRegularIcon,
	bold: CrosshairSimpleBoldIcon,
	fill: CrosshairSimpleFillIcon,
	duotone: CrosshairSimpleDuotoneIcon,
} as const;

export function CrosshairSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CrosshairSimpleIcon as CrosshairSimple };
