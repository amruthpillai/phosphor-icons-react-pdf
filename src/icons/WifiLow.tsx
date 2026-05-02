import { WifiLowIcon as WifiLowBoldIcon } from "../bold/WifiLow";
import { WifiLowIcon as WifiLowDuotoneIcon } from "../duotone/WifiLow";
import { WifiLowIcon as WifiLowFillIcon } from "../fill/WifiLow";
import { WifiLowIcon as WifiLowLightIcon } from "../light/WifiLow";
import { WifiLowIcon as WifiLowRegularIcon } from "../regular/WifiLow";
import { WifiLowIcon as WifiLowThinIcon } from "../thin/WifiLow";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WifiLowThinIcon,
	light: WifiLowLightIcon,
	regular: WifiLowRegularIcon,
	bold: WifiLowBoldIcon,
	fill: WifiLowFillIcon,
	duotone: WifiLowDuotoneIcon,
} as const;

export function WifiLowIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WifiLowIcon as WifiLow };
