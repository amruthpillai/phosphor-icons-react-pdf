import { LockIcon as LockBoldIcon } from "../bold/Lock";
import { LockIcon as LockDuotoneIcon } from "../duotone/Lock";
import { LockIcon as LockFillIcon } from "../fill/Lock";
import { LockIcon as LockLightIcon } from "../light/Lock";
import { LockIcon as LockRegularIcon } from "../regular/Lock";
import { LockIcon as LockThinIcon } from "../thin/Lock";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LockThinIcon,
	light: LockLightIcon,
	regular: LockRegularIcon,
	bold: LockBoldIcon,
	fill: LockFillIcon,
	duotone: LockDuotoneIcon,
} as const;

export function LockIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LockIcon as Lock };
