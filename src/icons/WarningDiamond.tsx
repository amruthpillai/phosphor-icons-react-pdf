import { WarningDiamondIcon as WarningDiamondBoldIcon } from "../bold/WarningDiamond";
import { WarningDiamondIcon as WarningDiamondDuotoneIcon } from "../duotone/WarningDiamond";
import { WarningDiamondIcon as WarningDiamondFillIcon } from "../fill/WarningDiamond";
import { WarningDiamondIcon as WarningDiamondLightIcon } from "../light/WarningDiamond";
import { WarningDiamondIcon as WarningDiamondRegularIcon } from "../regular/WarningDiamond";
import { WarningDiamondIcon as WarningDiamondThinIcon } from "../thin/WarningDiamond";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WarningDiamondThinIcon,
	light: WarningDiamondLightIcon,
	regular: WarningDiamondRegularIcon,
	bold: WarningDiamondBoldIcon,
	fill: WarningDiamondFillIcon,
	duotone: WarningDiamondDuotoneIcon,
} as const;

export function WarningDiamondIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WarningDiamondIcon as WarningDiamond };
