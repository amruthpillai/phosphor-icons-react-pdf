import { PlaceholderIcon as PlaceholderBoldIcon } from "../bold/Placeholder";
import { PlaceholderIcon as PlaceholderDuotoneIcon } from "../duotone/Placeholder";
import { PlaceholderIcon as PlaceholderFillIcon } from "../fill/Placeholder";
import { PlaceholderIcon as PlaceholderLightIcon } from "../light/Placeholder";
import { PlaceholderIcon as PlaceholderRegularIcon } from "../regular/Placeholder";
import { PlaceholderIcon as PlaceholderThinIcon } from "../thin/Placeholder";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PlaceholderThinIcon,
	light: PlaceholderLightIcon,
	regular: PlaceholderRegularIcon,
	bold: PlaceholderBoldIcon,
	fill: PlaceholderFillIcon,
	duotone: PlaceholderDuotoneIcon,
} as const;

export function PlaceholderIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PlaceholderIcon as Placeholder };
