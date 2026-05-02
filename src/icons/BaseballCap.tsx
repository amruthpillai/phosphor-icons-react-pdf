import { BaseballCapIcon as BaseballCapBoldIcon } from "../bold/BaseballCap";
import { BaseballCapIcon as BaseballCapDuotoneIcon } from "../duotone/BaseballCap";
import { BaseballCapIcon as BaseballCapFillIcon } from "../fill/BaseballCap";
import { BaseballCapIcon as BaseballCapLightIcon } from "../light/BaseballCap";
import { BaseballCapIcon as BaseballCapRegularIcon } from "../regular/BaseballCap";
import { BaseballCapIcon as BaseballCapThinIcon } from "../thin/BaseballCap";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BaseballCapThinIcon,
	light: BaseballCapLightIcon,
	regular: BaseballCapRegularIcon,
	bold: BaseballCapBoldIcon,
	fill: BaseballCapFillIcon,
	duotone: BaseballCapDuotoneIcon,
} as const;

export function BaseballCapIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BaseballCapIcon as BaseballCap };
