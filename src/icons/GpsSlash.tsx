import { GpsSlashIcon as GpsSlashBoldIcon } from "../bold/GpsSlash";
import { GpsSlashIcon as GpsSlashDuotoneIcon } from "../duotone/GpsSlash";
import { GpsSlashIcon as GpsSlashFillIcon } from "../fill/GpsSlash";
import { GpsSlashIcon as GpsSlashLightIcon } from "../light/GpsSlash";
import { GpsSlashIcon as GpsSlashRegularIcon } from "../regular/GpsSlash";
import { GpsSlashIcon as GpsSlashThinIcon } from "../thin/GpsSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GpsSlashThinIcon,
	light: GpsSlashLightIcon,
	regular: GpsSlashRegularIcon,
	bold: GpsSlashBoldIcon,
	fill: GpsSlashFillIcon,
	duotone: GpsSlashDuotoneIcon,
} as const;

export function GpsSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GpsSlashIcon as GpsSlash };
