import { GreaterThanOrEqualIcon as GreaterThanOrEqualBoldIcon } from "../bold/GreaterThanOrEqual";
import { GreaterThanOrEqualIcon as GreaterThanOrEqualDuotoneIcon } from "../duotone/GreaterThanOrEqual";
import { GreaterThanOrEqualIcon as GreaterThanOrEqualFillIcon } from "../fill/GreaterThanOrEqual";
import { GreaterThanOrEqualIcon as GreaterThanOrEqualLightIcon } from "../light/GreaterThanOrEqual";
import { GreaterThanOrEqualIcon as GreaterThanOrEqualRegularIcon } from "../regular/GreaterThanOrEqual";
import { GreaterThanOrEqualIcon as GreaterThanOrEqualThinIcon } from "../thin/GreaterThanOrEqual";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GreaterThanOrEqualThinIcon,
	light: GreaterThanOrEqualLightIcon,
	regular: GreaterThanOrEqualRegularIcon,
	bold: GreaterThanOrEqualBoldIcon,
	fill: GreaterThanOrEqualFillIcon,
	duotone: GreaterThanOrEqualDuotoneIcon,
} as const;

export function GreaterThanOrEqualIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GreaterThanOrEqualIcon as GreaterThanOrEqual };
