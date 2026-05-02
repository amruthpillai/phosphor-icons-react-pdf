import { WifiNoneIcon as WifiNoneBoldIcon } from "../bold/WifiNone";
import { WifiNoneIcon as WifiNoneDuotoneIcon } from "../duotone/WifiNone";
import { WifiNoneIcon as WifiNoneFillIcon } from "../fill/WifiNone";
import { WifiNoneIcon as WifiNoneLightIcon } from "../light/WifiNone";
import { WifiNoneIcon as WifiNoneRegularIcon } from "../regular/WifiNone";
import { WifiNoneIcon as WifiNoneThinIcon } from "../thin/WifiNone";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WifiNoneThinIcon,
	light: WifiNoneLightIcon,
	regular: WifiNoneRegularIcon,
	bold: WifiNoneBoldIcon,
	fill: WifiNoneFillIcon,
	duotone: WifiNoneDuotoneIcon,
} as const;

export function WifiNoneIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WifiNoneIcon as WifiNone };
