import { LockSimpleOpenIcon as LockSimpleOpenBoldIcon } from "../bold/LockSimpleOpen";
import { LockSimpleOpenIcon as LockSimpleOpenDuotoneIcon } from "../duotone/LockSimpleOpen";
import { LockSimpleOpenIcon as LockSimpleOpenFillIcon } from "../fill/LockSimpleOpen";
import { LockSimpleOpenIcon as LockSimpleOpenLightIcon } from "../light/LockSimpleOpen";
import { LockSimpleOpenIcon as LockSimpleOpenRegularIcon } from "../regular/LockSimpleOpen";
import { LockSimpleOpenIcon as LockSimpleOpenThinIcon } from "../thin/LockSimpleOpen";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LockSimpleOpenThinIcon,
	light: LockSimpleOpenLightIcon,
	regular: LockSimpleOpenRegularIcon,
	bold: LockSimpleOpenBoldIcon,
	fill: LockSimpleOpenFillIcon,
	duotone: LockSimpleOpenDuotoneIcon,
} as const;

export function LockSimpleOpenIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LockSimpleOpenIcon as LockSimpleOpen };
