import { TelevisionIcon as TelevisionBoldIcon } from "../bold/Television";
import { TelevisionIcon as TelevisionDuotoneIcon } from "../duotone/Television";
import { TelevisionIcon as TelevisionFillIcon } from "../fill/Television";
import { TelevisionIcon as TelevisionLightIcon } from "../light/Television";
import { TelevisionIcon as TelevisionRegularIcon } from "../regular/Television";
import { TelevisionIcon as TelevisionThinIcon } from "../thin/Television";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TelevisionThinIcon,
	light: TelevisionLightIcon,
	regular: TelevisionRegularIcon,
	bold: TelevisionBoldIcon,
	fill: TelevisionFillIcon,
	duotone: TelevisionDuotoneIcon,
} as const;

export function TelevisionIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TelevisionIcon as Television };
