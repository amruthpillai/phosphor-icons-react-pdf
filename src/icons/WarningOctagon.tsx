import { WarningOctagonIcon as WarningOctagonBoldIcon } from "../bold/WarningOctagon";
import { WarningOctagonIcon as WarningOctagonDuotoneIcon } from "../duotone/WarningOctagon";
import { WarningOctagonIcon as WarningOctagonFillIcon } from "../fill/WarningOctagon";
import { WarningOctagonIcon as WarningOctagonLightIcon } from "../light/WarningOctagon";
import { WarningOctagonIcon as WarningOctagonRegularIcon } from "../regular/WarningOctagon";
import { WarningOctagonIcon as WarningOctagonThinIcon } from "../thin/WarningOctagon";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WarningOctagonThinIcon,
	light: WarningOctagonLightIcon,
	regular: WarningOctagonRegularIcon,
	bold: WarningOctagonBoldIcon,
	fill: WarningOctagonFillIcon,
	duotone: WarningOctagonDuotoneIcon,
} as const;

export function WarningOctagonIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WarningOctagonIcon as WarningOctagon };
