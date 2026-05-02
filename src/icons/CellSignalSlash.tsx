import { CellSignalSlashIcon as CellSignalSlashBoldIcon } from "../bold/CellSignalSlash";
import { CellSignalSlashIcon as CellSignalSlashDuotoneIcon } from "../duotone/CellSignalSlash";
import { CellSignalSlashIcon as CellSignalSlashFillIcon } from "../fill/CellSignalSlash";
import { CellSignalSlashIcon as CellSignalSlashLightIcon } from "../light/CellSignalSlash";
import { CellSignalSlashIcon as CellSignalSlashRegularIcon } from "../regular/CellSignalSlash";
import { CellSignalSlashIcon as CellSignalSlashThinIcon } from "../thin/CellSignalSlash";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CellSignalSlashThinIcon,
	light: CellSignalSlashLightIcon,
	regular: CellSignalSlashRegularIcon,
	bold: CellSignalSlashBoldIcon,
	fill: CellSignalSlashFillIcon,
	duotone: CellSignalSlashDuotoneIcon,
} as const;

export function CellSignalSlashIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CellSignalSlashIcon as CellSignalSlash };
