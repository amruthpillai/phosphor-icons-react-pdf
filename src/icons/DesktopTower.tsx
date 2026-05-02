import { DesktopTowerIcon as DesktopTowerBoldIcon } from "../bold/DesktopTower";
import { DesktopTowerIcon as DesktopTowerDuotoneIcon } from "../duotone/DesktopTower";
import { DesktopTowerIcon as DesktopTowerFillIcon } from "../fill/DesktopTower";
import { DesktopTowerIcon as DesktopTowerLightIcon } from "../light/DesktopTower";
import { DesktopTowerIcon as DesktopTowerRegularIcon } from "../regular/DesktopTower";
import { DesktopTowerIcon as DesktopTowerThinIcon } from "../thin/DesktopTower";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DesktopTowerThinIcon,
	light: DesktopTowerLightIcon,
	regular: DesktopTowerRegularIcon,
	bold: DesktopTowerBoldIcon,
	fill: DesktopTowerFillIcon,
	duotone: DesktopTowerDuotoneIcon,
} as const;

export function DesktopTowerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DesktopTowerIcon as DesktopTower };
