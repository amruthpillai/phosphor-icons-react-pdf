import { StarAndCrescentIcon as StarAndCrescentBoldIcon } from "../bold/StarAndCrescent";
import { StarAndCrescentIcon as StarAndCrescentDuotoneIcon } from "../duotone/StarAndCrescent";
import { StarAndCrescentIcon as StarAndCrescentFillIcon } from "../fill/StarAndCrescent";
import { StarAndCrescentIcon as StarAndCrescentLightIcon } from "../light/StarAndCrescent";
import { StarAndCrescentIcon as StarAndCrescentRegularIcon } from "../regular/StarAndCrescent";
import { StarAndCrescentIcon as StarAndCrescentThinIcon } from "../thin/StarAndCrescent";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StarAndCrescentThinIcon,
	light: StarAndCrescentLightIcon,
	regular: StarAndCrescentRegularIcon,
	bold: StarAndCrescentBoldIcon,
	fill: StarAndCrescentFillIcon,
	duotone: StarAndCrescentDuotoneIcon,
} as const;

export function StarAndCrescentIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StarAndCrescentIcon as StarAndCrescent };
