import { WarningIcon as WarningBoldIcon } from "../bold/Warning";
import { WarningIcon as WarningDuotoneIcon } from "../duotone/Warning";
import { WarningIcon as WarningFillIcon } from "../fill/Warning";
import { WarningIcon as WarningLightIcon } from "../light/Warning";
import { WarningIcon as WarningRegularIcon } from "../regular/Warning";
import { WarningIcon as WarningThinIcon } from "../thin/Warning";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WarningThinIcon,
	light: WarningLightIcon,
	regular: WarningRegularIcon,
	bold: WarningBoldIcon,
	fill: WarningFillIcon,
	duotone: WarningDuotoneIcon,
} as const;

export function WarningIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WarningIcon as Warning };
