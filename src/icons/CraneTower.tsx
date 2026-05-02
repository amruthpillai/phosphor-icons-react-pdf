import { CraneTowerIcon as CraneTowerBoldIcon } from "../bold/CraneTower";
import { CraneTowerIcon as CraneTowerDuotoneIcon } from "../duotone/CraneTower";
import { CraneTowerIcon as CraneTowerFillIcon } from "../fill/CraneTower";
import { CraneTowerIcon as CraneTowerLightIcon } from "../light/CraneTower";
import { CraneTowerIcon as CraneTowerRegularIcon } from "../regular/CraneTower";
import { CraneTowerIcon as CraneTowerThinIcon } from "../thin/CraneTower";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CraneTowerThinIcon,
	light: CraneTowerLightIcon,
	regular: CraneTowerRegularIcon,
	bold: CraneTowerBoldIcon,
	fill: CraneTowerFillIcon,
	duotone: CraneTowerDuotoneIcon,
} as const;

export function CraneTowerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CraneTowerIcon as CraneTower };
