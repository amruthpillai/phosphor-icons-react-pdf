import { LockOpenIcon as LockOpenBoldIcon } from "../bold/LockOpen";
import { LockOpenIcon as LockOpenDuotoneIcon } from "../duotone/LockOpen";
import { LockOpenIcon as LockOpenFillIcon } from "../fill/LockOpen";
import { LockOpenIcon as LockOpenLightIcon } from "../light/LockOpen";
import { LockOpenIcon as LockOpenRegularIcon } from "../regular/LockOpen";
import { LockOpenIcon as LockOpenThinIcon } from "../thin/LockOpen";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LockOpenThinIcon,
	light: LockOpenLightIcon,
	regular: LockOpenRegularIcon,
	bold: LockOpenBoldIcon,
	fill: LockOpenFillIcon,
	duotone: LockOpenDuotoneIcon,
} as const;

export function LockOpenIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LockOpenIcon as LockOpen };
