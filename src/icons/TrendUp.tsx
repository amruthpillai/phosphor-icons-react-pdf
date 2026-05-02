import { TrendUpIcon as TrendUpBoldIcon } from "../bold/TrendUp";
import { TrendUpIcon as TrendUpDuotoneIcon } from "../duotone/TrendUp";
import { TrendUpIcon as TrendUpFillIcon } from "../fill/TrendUp";
import { TrendUpIcon as TrendUpLightIcon } from "../light/TrendUp";
import { TrendUpIcon as TrendUpRegularIcon } from "../regular/TrendUp";
import { TrendUpIcon as TrendUpThinIcon } from "../thin/TrendUp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TrendUpThinIcon,
	light: TrendUpLightIcon,
	regular: TrendUpRegularIcon,
	bold: TrendUpBoldIcon,
	fill: TrendUpFillIcon,
	duotone: TrendUpDuotoneIcon,
} as const;

export function TrendUpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TrendUpIcon as TrendUp };
