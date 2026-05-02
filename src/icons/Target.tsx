import { TargetIcon as TargetBoldIcon } from "../bold/Target";
import { TargetIcon as TargetDuotoneIcon } from "../duotone/Target";
import { TargetIcon as TargetFillIcon } from "../fill/Target";
import { TargetIcon as TargetLightIcon } from "../light/Target";
import { TargetIcon as TargetRegularIcon } from "../regular/Target";
import { TargetIcon as TargetThinIcon } from "../thin/Target";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TargetThinIcon,
	light: TargetLightIcon,
	regular: TargetRegularIcon,
	bold: TargetBoldIcon,
	fill: TargetFillIcon,
	duotone: TargetDuotoneIcon,
} as const;

export function TargetIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TargetIcon as Target };
