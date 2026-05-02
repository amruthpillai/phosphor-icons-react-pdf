import { PersonSimpleSwimIcon as PersonSimpleSwimBoldIcon } from "../bold/PersonSimpleSwim";
import { PersonSimpleSwimIcon as PersonSimpleSwimDuotoneIcon } from "../duotone/PersonSimpleSwim";
import { PersonSimpleSwimIcon as PersonSimpleSwimFillIcon } from "../fill/PersonSimpleSwim";
import { PersonSimpleSwimIcon as PersonSimpleSwimLightIcon } from "../light/PersonSimpleSwim";
import { PersonSimpleSwimIcon as PersonSimpleSwimRegularIcon } from "../regular/PersonSimpleSwim";
import { PersonSimpleSwimIcon as PersonSimpleSwimThinIcon } from "../thin/PersonSimpleSwim";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PersonSimpleSwimThinIcon,
	light: PersonSimpleSwimLightIcon,
	regular: PersonSimpleSwimRegularIcon,
	bold: PersonSimpleSwimBoldIcon,
	fill: PersonSimpleSwimFillIcon,
	duotone: PersonSimpleSwimDuotoneIcon,
} as const;

export function PersonSimpleSwimIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PersonSimpleSwimIcon as PersonSimpleSwim };
