import { MegaphoneSimpleIcon as MegaphoneSimpleBoldIcon } from "../bold/MegaphoneSimple";
import { MegaphoneSimpleIcon as MegaphoneSimpleDuotoneIcon } from "../duotone/MegaphoneSimple";
import { MegaphoneSimpleIcon as MegaphoneSimpleFillIcon } from "../fill/MegaphoneSimple";
import { MegaphoneSimpleIcon as MegaphoneSimpleLightIcon } from "../light/MegaphoneSimple";
import { MegaphoneSimpleIcon as MegaphoneSimpleRegularIcon } from "../regular/MegaphoneSimple";
import { MegaphoneSimpleIcon as MegaphoneSimpleThinIcon } from "../thin/MegaphoneSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MegaphoneSimpleThinIcon,
	light: MegaphoneSimpleLightIcon,
	regular: MegaphoneSimpleRegularIcon,
	bold: MegaphoneSimpleBoldIcon,
	fill: MegaphoneSimpleFillIcon,
	duotone: MegaphoneSimpleDuotoneIcon,
} as const;

export function MegaphoneSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MegaphoneSimpleIcon as MegaphoneSimple };
