import { TrendDownIcon as TrendDownBoldIcon } from "../bold/TrendDown";
import { TrendDownIcon as TrendDownDuotoneIcon } from "../duotone/TrendDown";
import { TrendDownIcon as TrendDownFillIcon } from "../fill/TrendDown";
import { TrendDownIcon as TrendDownLightIcon } from "../light/TrendDown";
import { TrendDownIcon as TrendDownRegularIcon } from "../regular/TrendDown";
import { TrendDownIcon as TrendDownThinIcon } from "../thin/TrendDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TrendDownThinIcon,
	light: TrendDownLightIcon,
	regular: TrendDownRegularIcon,
	bold: TrendDownBoldIcon,
	fill: TrendDownFillIcon,
	duotone: TrendDownDuotoneIcon,
} as const;

export function TrendDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TrendDownIcon as TrendDown };
