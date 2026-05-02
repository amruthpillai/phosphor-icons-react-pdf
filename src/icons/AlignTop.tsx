import { AlignTopIcon as AlignTopBoldIcon } from "../bold/AlignTop";
import { AlignTopIcon as AlignTopDuotoneIcon } from "../duotone/AlignTop";
import { AlignTopIcon as AlignTopFillIcon } from "../fill/AlignTop";
import { AlignTopIcon as AlignTopLightIcon } from "../light/AlignTop";
import { AlignTopIcon as AlignTopRegularIcon } from "../regular/AlignTop";
import { AlignTopIcon as AlignTopThinIcon } from "../thin/AlignTop";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AlignTopThinIcon,
	light: AlignTopLightIcon,
	regular: AlignTopRegularIcon,
	bold: AlignTopBoldIcon,
	fill: AlignTopFillIcon,
	duotone: AlignTopDuotoneIcon,
} as const;

export function AlignTopIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AlignTopIcon as AlignTop };
