import { SwimmingPoolIcon as SwimmingPoolBoldIcon } from "../bold/SwimmingPool";
import { SwimmingPoolIcon as SwimmingPoolDuotoneIcon } from "../duotone/SwimmingPool";
import { SwimmingPoolIcon as SwimmingPoolFillIcon } from "../fill/SwimmingPool";
import { SwimmingPoolIcon as SwimmingPoolLightIcon } from "../light/SwimmingPool";
import { SwimmingPoolIcon as SwimmingPoolRegularIcon } from "../regular/SwimmingPool";
import { SwimmingPoolIcon as SwimmingPoolThinIcon } from "../thin/SwimmingPool";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SwimmingPoolThinIcon,
	light: SwimmingPoolLightIcon,
	regular: SwimmingPoolRegularIcon,
	bold: SwimmingPoolBoldIcon,
	fill: SwimmingPoolFillIcon,
	duotone: SwimmingPoolDuotoneIcon,
} as const;

export function SwimmingPoolIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SwimmingPoolIcon as SwimmingPool };
