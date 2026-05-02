import { LockersIcon as LockersBoldIcon } from "../bold/Lockers";
import { LockersIcon as LockersDuotoneIcon } from "../duotone/Lockers";
import { LockersIcon as LockersFillIcon } from "../fill/Lockers";
import { LockersIcon as LockersLightIcon } from "../light/Lockers";
import { LockersIcon as LockersRegularIcon } from "../regular/Lockers";
import { LockersIcon as LockersThinIcon } from "../thin/Lockers";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LockersThinIcon,
	light: LockersLightIcon,
	regular: LockersRegularIcon,
	bold: LockersBoldIcon,
	fill: LockersFillIcon,
	duotone: LockersDuotoneIcon,
} as const;

export function LockersIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LockersIcon as Lockers };
