import { LockKeyOpenIcon as LockKeyOpenBoldIcon } from "../bold/LockKeyOpen";
import { LockKeyOpenIcon as LockKeyOpenDuotoneIcon } from "../duotone/LockKeyOpen";
import { LockKeyOpenIcon as LockKeyOpenFillIcon } from "../fill/LockKeyOpen";
import { LockKeyOpenIcon as LockKeyOpenLightIcon } from "../light/LockKeyOpen";
import { LockKeyOpenIcon as LockKeyOpenRegularIcon } from "../regular/LockKeyOpen";
import { LockKeyOpenIcon as LockKeyOpenThinIcon } from "../thin/LockKeyOpen";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LockKeyOpenThinIcon,
	light: LockKeyOpenLightIcon,
	regular: LockKeyOpenRegularIcon,
	bold: LockKeyOpenBoldIcon,
	fill: LockKeyOpenFillIcon,
	duotone: LockKeyOpenDuotoneIcon,
} as const;

export function LockKeyOpenIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LockKeyOpenIcon as LockKeyOpen };
