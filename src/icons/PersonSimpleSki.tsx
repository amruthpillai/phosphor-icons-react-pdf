import { PersonSimpleSkiIcon as PersonSimpleSkiBoldIcon } from "../bold/PersonSimpleSki";
import { PersonSimpleSkiIcon as PersonSimpleSkiDuotoneIcon } from "../duotone/PersonSimpleSki";
import { PersonSimpleSkiIcon as PersonSimpleSkiFillIcon } from "../fill/PersonSimpleSki";
import { PersonSimpleSkiIcon as PersonSimpleSkiLightIcon } from "../light/PersonSimpleSki";
import { PersonSimpleSkiIcon as PersonSimpleSkiRegularIcon } from "../regular/PersonSimpleSki";
import { PersonSimpleSkiIcon as PersonSimpleSkiThinIcon } from "../thin/PersonSimpleSki";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PersonSimpleSkiThinIcon,
	light: PersonSimpleSkiLightIcon,
	regular: PersonSimpleSkiRegularIcon,
	bold: PersonSimpleSkiBoldIcon,
	fill: PersonSimpleSkiFillIcon,
	duotone: PersonSimpleSkiDuotoneIcon,
} as const;

export function PersonSimpleSkiIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PersonSimpleSkiIcon as PersonSimpleSki };
