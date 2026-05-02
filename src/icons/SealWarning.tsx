import { SealWarningIcon as SealWarningBoldIcon } from "../bold/SealWarning";
import { SealWarningIcon as SealWarningDuotoneIcon } from "../duotone/SealWarning";
import { SealWarningIcon as SealWarningFillIcon } from "../fill/SealWarning";
import { SealWarningIcon as SealWarningLightIcon } from "../light/SealWarning";
import { SealWarningIcon as SealWarningRegularIcon } from "../regular/SealWarning";
import { SealWarningIcon as SealWarningThinIcon } from "../thin/SealWarning";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SealWarningThinIcon,
	light: SealWarningLightIcon,
	regular: SealWarningRegularIcon,
	bold: SealWarningBoldIcon,
	fill: SealWarningFillIcon,
	duotone: SealWarningDuotoneIcon,
} as const;

export function SealWarningIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SealWarningIcon as SealWarning };
