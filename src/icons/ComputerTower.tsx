import { ComputerTowerIcon as ComputerTowerBoldIcon } from "../bold/ComputerTower";
import { ComputerTowerIcon as ComputerTowerDuotoneIcon } from "../duotone/ComputerTower";
import { ComputerTowerIcon as ComputerTowerFillIcon } from "../fill/ComputerTower";
import { ComputerTowerIcon as ComputerTowerLightIcon } from "../light/ComputerTower";
import { ComputerTowerIcon as ComputerTowerRegularIcon } from "../regular/ComputerTower";
import { ComputerTowerIcon as ComputerTowerThinIcon } from "../thin/ComputerTower";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ComputerTowerThinIcon,
	light: ComputerTowerLightIcon,
	regular: ComputerTowerRegularIcon,
	bold: ComputerTowerBoldIcon,
	fill: ComputerTowerFillIcon,
	duotone: ComputerTowerDuotoneIcon,
} as const;

export function ComputerTowerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ComputerTowerIcon as ComputerTower };
