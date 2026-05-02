import { LessThanOrEqualIcon as LessThanOrEqualBoldIcon } from "../bold/LessThanOrEqual";
import { LessThanOrEqualIcon as LessThanOrEqualDuotoneIcon } from "../duotone/LessThanOrEqual";
import { LessThanOrEqualIcon as LessThanOrEqualFillIcon } from "../fill/LessThanOrEqual";
import { LessThanOrEqualIcon as LessThanOrEqualLightIcon } from "../light/LessThanOrEqual";
import { LessThanOrEqualIcon as LessThanOrEqualRegularIcon } from "../regular/LessThanOrEqual";
import { LessThanOrEqualIcon as LessThanOrEqualThinIcon } from "../thin/LessThanOrEqual";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LessThanOrEqualThinIcon,
	light: LessThanOrEqualLightIcon,
	regular: LessThanOrEqualRegularIcon,
	bold: LessThanOrEqualBoldIcon,
	fill: LessThanOrEqualFillIcon,
	duotone: LessThanOrEqualDuotoneIcon,
} as const;

export function LessThanOrEqualIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LessThanOrEqualIcon as LessThanOrEqual };
