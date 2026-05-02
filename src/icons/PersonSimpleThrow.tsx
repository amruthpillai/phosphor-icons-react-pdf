import { PersonSimpleThrowIcon as PersonSimpleThrowBoldIcon } from "../bold/PersonSimpleThrow";
import { PersonSimpleThrowIcon as PersonSimpleThrowDuotoneIcon } from "../duotone/PersonSimpleThrow";
import { PersonSimpleThrowIcon as PersonSimpleThrowFillIcon } from "../fill/PersonSimpleThrow";
import { PersonSimpleThrowIcon as PersonSimpleThrowLightIcon } from "../light/PersonSimpleThrow";
import { PersonSimpleThrowIcon as PersonSimpleThrowRegularIcon } from "../regular/PersonSimpleThrow";
import { PersonSimpleThrowIcon as PersonSimpleThrowThinIcon } from "../thin/PersonSimpleThrow";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PersonSimpleThrowThinIcon,
	light: PersonSimpleThrowLightIcon,
	regular: PersonSimpleThrowRegularIcon,
	bold: PersonSimpleThrowBoldIcon,
	fill: PersonSimpleThrowFillIcon,
	duotone: PersonSimpleThrowDuotoneIcon,
} as const;

export function PersonSimpleThrowIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PersonSimpleThrowIcon as PersonSimpleThrow };
