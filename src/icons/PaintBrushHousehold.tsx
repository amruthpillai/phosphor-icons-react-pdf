import { PaintBrushHouseholdIcon as PaintBrushHouseholdBoldIcon } from "../bold/PaintBrushHousehold";
import { PaintBrushHouseholdIcon as PaintBrushHouseholdDuotoneIcon } from "../duotone/PaintBrushHousehold";
import { PaintBrushHouseholdIcon as PaintBrushHouseholdFillIcon } from "../fill/PaintBrushHousehold";
import { PaintBrushHouseholdIcon as PaintBrushHouseholdLightIcon } from "../light/PaintBrushHousehold";
import { PaintBrushHouseholdIcon as PaintBrushHouseholdRegularIcon } from "../regular/PaintBrushHousehold";
import { PaintBrushHouseholdIcon as PaintBrushHouseholdThinIcon } from "../thin/PaintBrushHousehold";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PaintBrushHouseholdThinIcon,
	light: PaintBrushHouseholdLightIcon,
	regular: PaintBrushHouseholdRegularIcon,
	bold: PaintBrushHouseholdBoldIcon,
	fill: PaintBrushHouseholdFillIcon,
	duotone: PaintBrushHouseholdDuotoneIcon,
} as const;

export function PaintBrushHouseholdIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PaintBrushHouseholdIcon as PaintBrushHousehold };
