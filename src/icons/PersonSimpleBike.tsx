import { PersonSimpleBikeIcon as PersonSimpleBikeBoldIcon } from "../bold/PersonSimpleBike";
import { PersonSimpleBikeIcon as PersonSimpleBikeDuotoneIcon } from "../duotone/PersonSimpleBike";
import { PersonSimpleBikeIcon as PersonSimpleBikeFillIcon } from "../fill/PersonSimpleBike";
import { PersonSimpleBikeIcon as PersonSimpleBikeLightIcon } from "../light/PersonSimpleBike";
import { PersonSimpleBikeIcon as PersonSimpleBikeRegularIcon } from "../regular/PersonSimpleBike";
import { PersonSimpleBikeIcon as PersonSimpleBikeThinIcon } from "../thin/PersonSimpleBike";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PersonSimpleBikeThinIcon,
	light: PersonSimpleBikeLightIcon,
	regular: PersonSimpleBikeRegularIcon,
	bold: PersonSimpleBikeBoldIcon,
	fill: PersonSimpleBikeFillIcon,
	duotone: PersonSimpleBikeDuotoneIcon,
} as const;

export function PersonSimpleBikeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PersonSimpleBikeIcon as PersonSimpleBike };
