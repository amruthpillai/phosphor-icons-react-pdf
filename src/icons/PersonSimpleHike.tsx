import { PersonSimpleHikeIcon as PersonSimpleHikeBoldIcon } from "../bold/PersonSimpleHike";
import { PersonSimpleHikeIcon as PersonSimpleHikeDuotoneIcon } from "../duotone/PersonSimpleHike";
import { PersonSimpleHikeIcon as PersonSimpleHikeFillIcon } from "../fill/PersonSimpleHike";
import { PersonSimpleHikeIcon as PersonSimpleHikeLightIcon } from "../light/PersonSimpleHike";
import { PersonSimpleHikeIcon as PersonSimpleHikeRegularIcon } from "../regular/PersonSimpleHike";
import { PersonSimpleHikeIcon as PersonSimpleHikeThinIcon } from "../thin/PersonSimpleHike";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PersonSimpleHikeThinIcon,
	light: PersonSimpleHikeLightIcon,
	regular: PersonSimpleHikeRegularIcon,
	bold: PersonSimpleHikeBoldIcon,
	fill: PersonSimpleHikeFillIcon,
	duotone: PersonSimpleHikeDuotoneIcon,
} as const;

export function PersonSimpleHikeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PersonSimpleHikeIcon as PersonSimpleHike };
