import { StarIcon as StarBoldIcon } from "../bold/Star";
import { StarIcon as StarDuotoneIcon } from "../duotone/Star";
import { StarIcon as StarFillIcon } from "../fill/Star";
import { StarIcon as StarLightIcon } from "../light/Star";
import { StarIcon as StarRegularIcon } from "../regular/Star";
import { StarIcon as StarThinIcon } from "../thin/Star";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StarThinIcon,
	light: StarLightIcon,
	regular: StarRegularIcon,
	bold: StarBoldIcon,
	fill: StarFillIcon,
	duotone: StarDuotoneIcon,
} as const;

export function StarIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StarIcon as Star };
