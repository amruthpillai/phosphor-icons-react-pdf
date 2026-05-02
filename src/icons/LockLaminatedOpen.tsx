import { LockLaminatedOpenIcon as LockLaminatedOpenBoldIcon } from "../bold/LockLaminatedOpen";
import { LockLaminatedOpenIcon as LockLaminatedOpenDuotoneIcon } from "../duotone/LockLaminatedOpen";
import { LockLaminatedOpenIcon as LockLaminatedOpenFillIcon } from "../fill/LockLaminatedOpen";
import { LockLaminatedOpenIcon as LockLaminatedOpenLightIcon } from "../light/LockLaminatedOpen";
import { LockLaminatedOpenIcon as LockLaminatedOpenRegularIcon } from "../regular/LockLaminatedOpen";
import { LockLaminatedOpenIcon as LockLaminatedOpenThinIcon } from "../thin/LockLaminatedOpen";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LockLaminatedOpenThinIcon,
	light: LockLaminatedOpenLightIcon,
	regular: LockLaminatedOpenRegularIcon,
	bold: LockLaminatedOpenBoldIcon,
	fill: LockLaminatedOpenFillIcon,
	duotone: LockLaminatedOpenDuotoneIcon,
} as const;

export function LockLaminatedOpenIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LockLaminatedOpenIcon as LockLaminatedOpen };
