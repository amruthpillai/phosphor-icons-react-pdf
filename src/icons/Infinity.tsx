import { InfinityIcon as InfinityBoldIcon } from "../bold/Infinity";
import { InfinityIcon as InfinityDuotoneIcon } from "../duotone/Infinity";
import { InfinityIcon as InfinityFillIcon } from "../fill/Infinity";
import { InfinityIcon as InfinityLightIcon } from "../light/Infinity";
import { InfinityIcon as InfinityRegularIcon } from "../regular/Infinity";
import { InfinityIcon as InfinityThinIcon } from "../thin/Infinity";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: InfinityThinIcon,
	light: InfinityLightIcon,
	regular: InfinityRegularIcon,
	bold: InfinityBoldIcon,
	fill: InfinityFillIcon,
	duotone: InfinityDuotoneIcon,
} as const;

export function InfinityIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { InfinityIcon as Infinity };
