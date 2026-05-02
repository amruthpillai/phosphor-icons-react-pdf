import { WifiMediumIcon as WifiMediumBoldIcon } from "../bold/WifiMedium";
import { WifiMediumIcon as WifiMediumDuotoneIcon } from "../duotone/WifiMedium";
import { WifiMediumIcon as WifiMediumFillIcon } from "../fill/WifiMedium";
import { WifiMediumIcon as WifiMediumLightIcon } from "../light/WifiMedium";
import { WifiMediumIcon as WifiMediumRegularIcon } from "../regular/WifiMedium";
import { WifiMediumIcon as WifiMediumThinIcon } from "../thin/WifiMedium";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WifiMediumThinIcon,
	light: WifiMediumLightIcon,
	regular: WifiMediumRegularIcon,
	bold: WifiMediumBoldIcon,
	fill: WifiMediumFillIcon,
	duotone: WifiMediumDuotoneIcon,
} as const;

export function WifiMediumIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WifiMediumIcon as WifiMedium };
