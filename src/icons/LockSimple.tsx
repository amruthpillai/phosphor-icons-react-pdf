import { LockSimpleIcon as LockSimpleBoldIcon } from "../bold/LockSimple";
import { LockSimpleIcon as LockSimpleDuotoneIcon } from "../duotone/LockSimple";
import { LockSimpleIcon as LockSimpleFillIcon } from "../fill/LockSimple";
import { LockSimpleIcon as LockSimpleLightIcon } from "../light/LockSimple";
import { LockSimpleIcon as LockSimpleRegularIcon } from "../regular/LockSimple";
import { LockSimpleIcon as LockSimpleThinIcon } from "../thin/LockSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LockSimpleThinIcon,
	light: LockSimpleLightIcon,
	regular: LockSimpleRegularIcon,
	bold: LockSimpleBoldIcon,
	fill: LockSimpleFillIcon,
	duotone: LockSimpleDuotoneIcon,
} as const;

export function LockSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LockSimpleIcon as LockSimple };
