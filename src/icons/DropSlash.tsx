import { DropSlashIcon as DropSlashBoldIcon } from "../bold/DropSlash";
import { DropSlashIcon as DropSlashDuotoneIcon } from "../duotone/DropSlash";
import { DropSlashIcon as DropSlashFillIcon } from "../fill/DropSlash";
import { DropSlashIcon as DropSlashLightIcon } from "../light/DropSlash";
import { DropSlashIcon as DropSlashRegularIcon } from "../regular/DropSlash";
import { DropSlashIcon as DropSlashThinIcon } from "../thin/DropSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DropSlashThinIcon,
	light: DropSlashLightIcon,
	regular: DropSlashRegularIcon,
	bold: DropSlashBoldIcon,
	fill: DropSlashFillIcon,
	duotone: DropSlashDuotoneIcon,
} as const;

export function DropSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DropSlashIcon as DropSlash };
