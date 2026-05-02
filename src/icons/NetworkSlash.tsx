import { NetworkSlashIcon as NetworkSlashBoldIcon } from "../bold/NetworkSlash";
import { NetworkSlashIcon as NetworkSlashDuotoneIcon } from "../duotone/NetworkSlash";
import { NetworkSlashIcon as NetworkSlashFillIcon } from "../fill/NetworkSlash";
import { NetworkSlashIcon as NetworkSlashLightIcon } from "../light/NetworkSlash";
import { NetworkSlashIcon as NetworkSlashRegularIcon } from "../regular/NetworkSlash";
import { NetworkSlashIcon as NetworkSlashThinIcon } from "../thin/NetworkSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NetworkSlashThinIcon,
	light: NetworkSlashLightIcon,
	regular: NetworkSlashRegularIcon,
	bold: NetworkSlashBoldIcon,
	fill: NetworkSlashFillIcon,
	duotone: NetworkSlashDuotoneIcon,
} as const;

export function NetworkSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NetworkSlashIcon as NetworkSlash };
