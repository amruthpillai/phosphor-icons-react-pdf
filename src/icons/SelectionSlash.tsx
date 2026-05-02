import { SelectionSlashIcon as SelectionSlashBoldIcon } from "../bold/SelectionSlash";
import { SelectionSlashIcon as SelectionSlashDuotoneIcon } from "../duotone/SelectionSlash";
import { SelectionSlashIcon as SelectionSlashFillIcon } from "../fill/SelectionSlash";
import { SelectionSlashIcon as SelectionSlashLightIcon } from "../light/SelectionSlash";
import { SelectionSlashIcon as SelectionSlashRegularIcon } from "../regular/SelectionSlash";
import { SelectionSlashIcon as SelectionSlashThinIcon } from "../thin/SelectionSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SelectionSlashThinIcon,
	light: SelectionSlashLightIcon,
	regular: SelectionSlashRegularIcon,
	bold: SelectionSlashBoldIcon,
	fill: SelectionSlashFillIcon,
	duotone: SelectionSlashDuotoneIcon,
} as const;

export function SelectionSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SelectionSlashIcon as SelectionSlash };
