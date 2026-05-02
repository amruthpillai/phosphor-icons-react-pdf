import { DiscIcon as DiscBoldIcon } from "../bold/Disc";
import { DiscIcon as DiscDuotoneIcon } from "../duotone/Disc";
import { DiscIcon as DiscFillIcon } from "../fill/Disc";
import { DiscIcon as DiscLightIcon } from "../light/Disc";
import { DiscIcon as DiscRegularIcon } from "../regular/Disc";
import { DiscIcon as DiscThinIcon } from "../thin/Disc";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DiscThinIcon,
	light: DiscLightIcon,
	regular: DiscRegularIcon,
	bold: DiscBoldIcon,
	fill: DiscFillIcon,
	duotone: DiscDuotoneIcon,
} as const;

export function DiscIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DiscIcon as Disc };
