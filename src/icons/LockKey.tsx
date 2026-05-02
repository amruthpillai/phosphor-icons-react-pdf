import { LockKeyIcon as LockKeyBoldIcon } from "../bold/LockKey";
import { LockKeyIcon as LockKeyDuotoneIcon } from "../duotone/LockKey";
import { LockKeyIcon as LockKeyFillIcon } from "../fill/LockKey";
import { LockKeyIcon as LockKeyLightIcon } from "../light/LockKey";
import { LockKeyIcon as LockKeyRegularIcon } from "../regular/LockKey";
import { LockKeyIcon as LockKeyThinIcon } from "../thin/LockKey";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LockKeyThinIcon,
	light: LockKeyLightIcon,
	regular: LockKeyRegularIcon,
	bold: LockKeyBoldIcon,
	fill: LockKeyFillIcon,
	duotone: LockKeyDuotoneIcon,
} as const;

export function LockKeyIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LockKeyIcon as LockKey };
