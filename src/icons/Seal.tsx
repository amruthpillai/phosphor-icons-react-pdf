import { SealIcon as SealBoldIcon } from "../bold/Seal";
import { SealIcon as SealDuotoneIcon } from "../duotone/Seal";
import { SealIcon as SealFillIcon } from "../fill/Seal";
import { SealIcon as SealLightIcon } from "../light/Seal";
import { SealIcon as SealRegularIcon } from "../regular/Seal";
import { SealIcon as SealThinIcon } from "../thin/Seal";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SealThinIcon,
	light: SealLightIcon,
	regular: SealRegularIcon,
	bold: SealBoldIcon,
	fill: SealFillIcon,
	duotone: SealDuotoneIcon,
} as const;

export function SealIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SealIcon as Seal };
