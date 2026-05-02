import { CellTowerIcon as CellTowerBoldIcon } from "../bold/CellTower";
import { CellTowerIcon as CellTowerDuotoneIcon } from "../duotone/CellTower";
import { CellTowerIcon as CellTowerFillIcon } from "../fill/CellTower";
import { CellTowerIcon as CellTowerLightIcon } from "../light/CellTower";
import { CellTowerIcon as CellTowerRegularIcon } from "../regular/CellTower";
import { CellTowerIcon as CellTowerThinIcon } from "../thin/CellTower";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CellTowerThinIcon,
	light: CellTowerLightIcon,
	regular: CellTowerRegularIcon,
	bold: CellTowerBoldIcon,
	fill: CellTowerFillIcon,
	duotone: CellTowerDuotoneIcon,
} as const;

export function CellTowerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CellTowerIcon as CellTower };
