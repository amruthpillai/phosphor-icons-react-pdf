import { DiamondsFourIcon as DiamondsFourBoldIcon } from "../bold/DiamondsFour";
import { DiamondsFourIcon as DiamondsFourDuotoneIcon } from "../duotone/DiamondsFour";
import { DiamondsFourIcon as DiamondsFourFillIcon } from "../fill/DiamondsFour";
import { DiamondsFourIcon as DiamondsFourLightIcon } from "../light/DiamondsFour";
import { DiamondsFourIcon as DiamondsFourRegularIcon } from "../regular/DiamondsFour";
import { DiamondsFourIcon as DiamondsFourThinIcon } from "../thin/DiamondsFour";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DiamondsFourThinIcon,
	light: DiamondsFourLightIcon,
	regular: DiamondsFourRegularIcon,
	bold: DiamondsFourBoldIcon,
	fill: DiamondsFourFillIcon,
	duotone: DiamondsFourDuotoneIcon,
} as const;

export function DiamondsFourIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DiamondsFourIcon as DiamondsFour };
