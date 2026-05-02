import { WifiXIcon as WifiXBoldIcon } from "../bold/WifiX";
import { WifiXIcon as WifiXDuotoneIcon } from "../duotone/WifiX";
import { WifiXIcon as WifiXFillIcon } from "../fill/WifiX";
import { WifiXIcon as WifiXLightIcon } from "../light/WifiX";
import { WifiXIcon as WifiXRegularIcon } from "../regular/WifiX";
import { WifiXIcon as WifiXThinIcon } from "../thin/WifiX";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WifiXThinIcon,
	light: WifiXLightIcon,
	regular: WifiXRegularIcon,
	bold: WifiXBoldIcon,
	fill: WifiXFillIcon,
	duotone: WifiXDuotoneIcon,
} as const;

export function WifiXIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WifiXIcon as WifiX };
