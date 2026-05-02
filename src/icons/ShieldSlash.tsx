import { ShieldSlashIcon as ShieldSlashBoldIcon } from "../bold/ShieldSlash";
import { ShieldSlashIcon as ShieldSlashDuotoneIcon } from "../duotone/ShieldSlash";
import { ShieldSlashIcon as ShieldSlashFillIcon } from "../fill/ShieldSlash";
import { ShieldSlashIcon as ShieldSlashLightIcon } from "../light/ShieldSlash";
import { ShieldSlashIcon as ShieldSlashRegularIcon } from "../regular/ShieldSlash";
import { ShieldSlashIcon as ShieldSlashThinIcon } from "../thin/ShieldSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShieldSlashThinIcon,
	light: ShieldSlashLightIcon,
	regular: ShieldSlashRegularIcon,
	bold: ShieldSlashBoldIcon,
	fill: ShieldSlashFillIcon,
	duotone: ShieldSlashDuotoneIcon,
} as const;

export function ShieldSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShieldSlashIcon as ShieldSlash };
