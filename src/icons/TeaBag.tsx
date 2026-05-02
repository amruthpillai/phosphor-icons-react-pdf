import { TeaBagIcon as TeaBagBoldIcon } from "../bold/TeaBag";
import { TeaBagIcon as TeaBagDuotoneIcon } from "../duotone/TeaBag";
import { TeaBagIcon as TeaBagFillIcon } from "../fill/TeaBag";
import { TeaBagIcon as TeaBagLightIcon } from "../light/TeaBag";
import { TeaBagIcon as TeaBagRegularIcon } from "../regular/TeaBag";
import { TeaBagIcon as TeaBagThinIcon } from "../thin/TeaBag";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TeaBagThinIcon,
	light: TeaBagLightIcon,
	regular: TeaBagRegularIcon,
	bold: TeaBagBoldIcon,
	fill: TeaBagFillIcon,
	duotone: TeaBagDuotoneIcon,
} as const;

export function TeaBagIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TeaBagIcon as TeaBag };
