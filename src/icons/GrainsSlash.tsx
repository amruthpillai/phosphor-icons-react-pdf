import { GrainsSlashIcon as GrainsSlashBoldIcon } from "../bold/GrainsSlash";
import { GrainsSlashIcon as GrainsSlashDuotoneIcon } from "../duotone/GrainsSlash";
import { GrainsSlashIcon as GrainsSlashFillIcon } from "../fill/GrainsSlash";
import { GrainsSlashIcon as GrainsSlashLightIcon } from "../light/GrainsSlash";
import { GrainsSlashIcon as GrainsSlashRegularIcon } from "../regular/GrainsSlash";
import { GrainsSlashIcon as GrainsSlashThinIcon } from "../thin/GrainsSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GrainsSlashThinIcon,
	light: GrainsSlashLightIcon,
	regular: GrainsSlashRegularIcon,
	bold: GrainsSlashBoldIcon,
	fill: GrainsSlashFillIcon,
	duotone: GrainsSlashDuotoneIcon,
} as const;

export function GrainsSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GrainsSlashIcon as GrainsSlash };
