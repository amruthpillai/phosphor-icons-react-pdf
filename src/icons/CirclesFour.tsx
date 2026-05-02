import { CirclesFourIcon as CirclesFourBoldIcon } from "../bold/CirclesFour";
import { CirclesFourIcon as CirclesFourDuotoneIcon } from "../duotone/CirclesFour";
import { CirclesFourIcon as CirclesFourFillIcon } from "../fill/CirclesFour";
import { CirclesFourIcon as CirclesFourLightIcon } from "../light/CirclesFour";
import { CirclesFourIcon as CirclesFourRegularIcon } from "../regular/CirclesFour";
import { CirclesFourIcon as CirclesFourThinIcon } from "../thin/CirclesFour";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CirclesFourThinIcon,
	light: CirclesFourLightIcon,
	regular: CirclesFourRegularIcon,
	bold: CirclesFourBoldIcon,
	fill: CirclesFourFillIcon,
	duotone: CirclesFourDuotoneIcon,
} as const;

export function CirclesFourIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CirclesFourIcon as CirclesFour };
