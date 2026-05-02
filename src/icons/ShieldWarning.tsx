import { ShieldWarningIcon as ShieldWarningBoldIcon } from "../bold/ShieldWarning";
import { ShieldWarningIcon as ShieldWarningDuotoneIcon } from "../duotone/ShieldWarning";
import { ShieldWarningIcon as ShieldWarningFillIcon } from "../fill/ShieldWarning";
import { ShieldWarningIcon as ShieldWarningLightIcon } from "../light/ShieldWarning";
import { ShieldWarningIcon as ShieldWarningRegularIcon } from "../regular/ShieldWarning";
import { ShieldWarningIcon as ShieldWarningThinIcon } from "../thin/ShieldWarning";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShieldWarningThinIcon,
	light: ShieldWarningLightIcon,
	regular: ShieldWarningRegularIcon,
	bold: ShieldWarningBoldIcon,
	fill: ShieldWarningFillIcon,
	duotone: ShieldWarningDuotoneIcon,
} as const;

export function ShieldWarningIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShieldWarningIcon as ShieldWarning };
