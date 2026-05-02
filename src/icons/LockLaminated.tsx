import { LockLaminatedIcon as LockLaminatedBoldIcon } from "../bold/LockLaminated";
import { LockLaminatedIcon as LockLaminatedDuotoneIcon } from "../duotone/LockLaminated";
import { LockLaminatedIcon as LockLaminatedFillIcon } from "../fill/LockLaminated";
import { LockLaminatedIcon as LockLaminatedLightIcon } from "../light/LockLaminated";
import { LockLaminatedIcon as LockLaminatedRegularIcon } from "../regular/LockLaminated";
import { LockLaminatedIcon as LockLaminatedThinIcon } from "../thin/LockLaminated";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LockLaminatedThinIcon,
	light: LockLaminatedLightIcon,
	regular: LockLaminatedRegularIcon,
	bold: LockLaminatedBoldIcon,
	fill: LockLaminatedFillIcon,
	duotone: LockLaminatedDuotoneIcon,
} as const;

export function LockLaminatedIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LockLaminatedIcon as LockLaminated };
