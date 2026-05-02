import { BellSlashIcon as BellSlashBoldIcon } from "../bold/BellSlash";
import { BellSlashIcon as BellSlashDuotoneIcon } from "../duotone/BellSlash";
import { BellSlashIcon as BellSlashFillIcon } from "../fill/BellSlash";
import { BellSlashIcon as BellSlashLightIcon } from "../light/BellSlash";
import { BellSlashIcon as BellSlashRegularIcon } from "../regular/BellSlash";
import { BellSlashIcon as BellSlashThinIcon } from "../thin/BellSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BellSlashThinIcon,
	light: BellSlashLightIcon,
	regular: BellSlashRegularIcon,
	bold: BellSlashBoldIcon,
	fill: BellSlashFillIcon,
	duotone: BellSlashDuotoneIcon,
} as const;

export function BellSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BellSlashIcon as BellSlash };
