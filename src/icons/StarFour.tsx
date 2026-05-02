import { StarFourIcon as StarFourBoldIcon } from "../bold/StarFour";
import { StarFourIcon as StarFourDuotoneIcon } from "../duotone/StarFour";
import { StarFourIcon as StarFourFillIcon } from "../fill/StarFour";
import { StarFourIcon as StarFourLightIcon } from "../light/StarFour";
import { StarFourIcon as StarFourRegularIcon } from "../regular/StarFour";
import { StarFourIcon as StarFourThinIcon } from "../thin/StarFour";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StarFourThinIcon,
	light: StarFourLightIcon,
	regular: StarFourRegularIcon,
	bold: StarFourBoldIcon,
	fill: StarFourFillIcon,
	duotone: StarFourDuotoneIcon,
} as const;

export function StarFourIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StarFourIcon as StarFour };
