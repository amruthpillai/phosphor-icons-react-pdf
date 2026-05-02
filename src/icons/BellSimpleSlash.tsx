import { BellSimpleSlashIcon as BellSimpleSlashBoldIcon } from "../bold/BellSimpleSlash";
import { BellSimpleSlashIcon as BellSimpleSlashDuotoneIcon } from "../duotone/BellSimpleSlash";
import { BellSimpleSlashIcon as BellSimpleSlashFillIcon } from "../fill/BellSimpleSlash";
import { BellSimpleSlashIcon as BellSimpleSlashLightIcon } from "../light/BellSimpleSlash";
import { BellSimpleSlashIcon as BellSimpleSlashRegularIcon } from "../regular/BellSimpleSlash";
import { BellSimpleSlashIcon as BellSimpleSlashThinIcon } from "../thin/BellSimpleSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BellSimpleSlashThinIcon,
	light: BellSimpleSlashLightIcon,
	regular: BellSimpleSlashRegularIcon,
	bold: BellSimpleSlashBoldIcon,
	fill: BellSimpleSlashFillIcon,
	duotone: BellSimpleSlashDuotoneIcon,
} as const;

export function BellSimpleSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BellSimpleSlashIcon as BellSimpleSlash };
