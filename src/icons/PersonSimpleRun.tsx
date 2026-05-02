import { PersonSimpleRunIcon as PersonSimpleRunBoldIcon } from "../bold/PersonSimpleRun";
import { PersonSimpleRunIcon as PersonSimpleRunDuotoneIcon } from "../duotone/PersonSimpleRun";
import { PersonSimpleRunIcon as PersonSimpleRunFillIcon } from "../fill/PersonSimpleRun";
import { PersonSimpleRunIcon as PersonSimpleRunLightIcon } from "../light/PersonSimpleRun";
import { PersonSimpleRunIcon as PersonSimpleRunRegularIcon } from "../regular/PersonSimpleRun";
import { PersonSimpleRunIcon as PersonSimpleRunThinIcon } from "../thin/PersonSimpleRun";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PersonSimpleRunThinIcon,
	light: PersonSimpleRunLightIcon,
	regular: PersonSimpleRunRegularIcon,
	bold: PersonSimpleRunBoldIcon,
	fill: PersonSimpleRunFillIcon,
	duotone: PersonSimpleRunDuotoneIcon,
} as const;

export function PersonSimpleRunIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PersonSimpleRunIcon as PersonSimpleRun };
