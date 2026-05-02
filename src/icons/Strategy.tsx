import { StrategyIcon as StrategyBoldIcon } from "../bold/Strategy";
import { StrategyIcon as StrategyDuotoneIcon } from "../duotone/Strategy";
import { StrategyIcon as StrategyFillIcon } from "../fill/Strategy";
import { StrategyIcon as StrategyLightIcon } from "../light/Strategy";
import { StrategyIcon as StrategyRegularIcon } from "../regular/Strategy";
import { StrategyIcon as StrategyThinIcon } from "../thin/Strategy";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StrategyThinIcon,
	light: StrategyLightIcon,
	regular: StrategyRegularIcon,
	bold: StrategyBoldIcon,
	fill: StrategyFillIcon,
	duotone: StrategyDuotoneIcon,
} as const;

export function StrategyIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StrategyIcon as Strategy };
