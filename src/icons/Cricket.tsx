import { CricketIcon as CricketBoldIcon } from "../bold/Cricket";
import { CricketIcon as CricketDuotoneIcon } from "../duotone/Cricket";
import { CricketIcon as CricketFillIcon } from "../fill/Cricket";
import { CricketIcon as CricketLightIcon } from "../light/Cricket";
import { CricketIcon as CricketRegularIcon } from "../regular/Cricket";
import { CricketIcon as CricketThinIcon } from "../thin/Cricket";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CricketThinIcon,
	light: CricketLightIcon,
	regular: CricketRegularIcon,
	bold: CricketBoldIcon,
	fill: CricketFillIcon,
	duotone: CricketDuotoneIcon,
} as const;

export function CricketIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CricketIcon as Cricket };
