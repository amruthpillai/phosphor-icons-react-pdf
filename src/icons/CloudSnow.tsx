import { CloudSnowIcon as CloudSnowBoldIcon } from "../bold/CloudSnow";
import { CloudSnowIcon as CloudSnowDuotoneIcon } from "../duotone/CloudSnow";
import { CloudSnowIcon as CloudSnowFillIcon } from "../fill/CloudSnow";
import { CloudSnowIcon as CloudSnowLightIcon } from "../light/CloudSnow";
import { CloudSnowIcon as CloudSnowRegularIcon } from "../regular/CloudSnow";
import { CloudSnowIcon as CloudSnowThinIcon } from "../thin/CloudSnow";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CloudSnowThinIcon,
	light: CloudSnowLightIcon,
	regular: CloudSnowRegularIcon,
	bold: CloudSnowBoldIcon,
	fill: CloudSnowFillIcon,
	duotone: CloudSnowDuotoneIcon,
} as const;

export function CloudSnowIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CloudSnowIcon as CloudSnow };
