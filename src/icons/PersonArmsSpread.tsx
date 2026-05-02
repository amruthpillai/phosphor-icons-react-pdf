import { PersonArmsSpreadIcon as PersonArmsSpreadBoldIcon } from "../bold/PersonArmsSpread";
import { PersonArmsSpreadIcon as PersonArmsSpreadDuotoneIcon } from "../duotone/PersonArmsSpread";
import { PersonArmsSpreadIcon as PersonArmsSpreadFillIcon } from "../fill/PersonArmsSpread";
import { PersonArmsSpreadIcon as PersonArmsSpreadLightIcon } from "../light/PersonArmsSpread";
import { PersonArmsSpreadIcon as PersonArmsSpreadRegularIcon } from "../regular/PersonArmsSpread";
import { PersonArmsSpreadIcon as PersonArmsSpreadThinIcon } from "../thin/PersonArmsSpread";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PersonArmsSpreadThinIcon,
	light: PersonArmsSpreadLightIcon,
	regular: PersonArmsSpreadRegularIcon,
	bold: PersonArmsSpreadBoldIcon,
	fill: PersonArmsSpreadFillIcon,
	duotone: PersonArmsSpreadDuotoneIcon,
} as const;

export function PersonArmsSpreadIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PersonArmsSpreadIcon as PersonArmsSpread };
