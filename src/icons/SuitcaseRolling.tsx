import { SuitcaseRollingIcon as SuitcaseRollingBoldIcon } from "../bold/SuitcaseRolling";
import { SuitcaseRollingIcon as SuitcaseRollingDuotoneIcon } from "../duotone/SuitcaseRolling";
import { SuitcaseRollingIcon as SuitcaseRollingFillIcon } from "../fill/SuitcaseRolling";
import { SuitcaseRollingIcon as SuitcaseRollingLightIcon } from "../light/SuitcaseRolling";
import { SuitcaseRollingIcon as SuitcaseRollingRegularIcon } from "../regular/SuitcaseRolling";
import { SuitcaseRollingIcon as SuitcaseRollingThinIcon } from "../thin/SuitcaseRolling";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SuitcaseRollingThinIcon,
	light: SuitcaseRollingLightIcon,
	regular: SuitcaseRollingRegularIcon,
	bold: SuitcaseRollingBoldIcon,
	fill: SuitcaseRollingFillIcon,
	duotone: SuitcaseRollingDuotoneIcon,
} as const;

export function SuitcaseRollingIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SuitcaseRollingIcon as SuitcaseRolling };
