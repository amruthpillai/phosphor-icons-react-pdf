import { WifiSlashIcon as WifiSlashBoldIcon } from "../bold/WifiSlash";
import { WifiSlashIcon as WifiSlashDuotoneIcon } from "../duotone/WifiSlash";
import { WifiSlashIcon as WifiSlashFillIcon } from "../fill/WifiSlash";
import { WifiSlashIcon as WifiSlashLightIcon } from "../light/WifiSlash";
import { WifiSlashIcon as WifiSlashRegularIcon } from "../regular/WifiSlash";
import { WifiSlashIcon as WifiSlashThinIcon } from "../thin/WifiSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WifiSlashThinIcon,
	light: WifiSlashLightIcon,
	regular: WifiSlashRegularIcon,
	bold: WifiSlashBoldIcon,
	fill: WifiSlashFillIcon,
	duotone: WifiSlashDuotoneIcon,
} as const;

export function WifiSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WifiSlashIcon as WifiSlash };
