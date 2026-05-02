import { HockeyIcon as HockeyBoldIcon } from "../bold/Hockey";
import { HockeyIcon as HockeyDuotoneIcon } from "../duotone/Hockey";
import { HockeyIcon as HockeyFillIcon } from "../fill/Hockey";
import { HockeyIcon as HockeyLightIcon } from "../light/Hockey";
import { HockeyIcon as HockeyRegularIcon } from "../regular/Hockey";
import { HockeyIcon as HockeyThinIcon } from "../thin/Hockey";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HockeyThinIcon,
	light: HockeyLightIcon,
	regular: HockeyRegularIcon,
	bold: HockeyBoldIcon,
	fill: HockeyFillIcon,
	duotone: HockeyDuotoneIcon,
} as const;

export function HockeyIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HockeyIcon as Hockey };
