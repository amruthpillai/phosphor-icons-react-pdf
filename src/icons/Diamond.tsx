import { DiamondIcon as DiamondBoldIcon } from "../bold/Diamond";
import { DiamondIcon as DiamondDuotoneIcon } from "../duotone/Diamond";
import { DiamondIcon as DiamondFillIcon } from "../fill/Diamond";
import { DiamondIcon as DiamondLightIcon } from "../light/Diamond";
import { DiamondIcon as DiamondRegularIcon } from "../regular/Diamond";
import { DiamondIcon as DiamondThinIcon } from "../thin/Diamond";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DiamondThinIcon,
	light: DiamondLightIcon,
	regular: DiamondRegularIcon,
	bold: DiamondBoldIcon,
	fill: DiamondFillIcon,
	duotone: DiamondDuotoneIcon,
} as const;

export function DiamondIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DiamondIcon as Diamond };
