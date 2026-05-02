import { WifiHighIcon as WifiHighBoldIcon } from "../bold/WifiHigh";
import { WifiHighIcon as WifiHighDuotoneIcon } from "../duotone/WifiHigh";
import { WifiHighIcon as WifiHighFillIcon } from "../fill/WifiHigh";
import { WifiHighIcon as WifiHighLightIcon } from "../light/WifiHigh";
import { WifiHighIcon as WifiHighRegularIcon } from "../regular/WifiHigh";
import { WifiHighIcon as WifiHighThinIcon } from "../thin/WifiHigh";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WifiHighThinIcon,
	light: WifiHighLightIcon,
	regular: WifiHighRegularIcon,
	bold: WifiHighBoldIcon,
	fill: WifiHighFillIcon,
	duotone: WifiHighDuotoneIcon,
} as const;

export function WifiHighIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WifiHighIcon as WifiHigh };
