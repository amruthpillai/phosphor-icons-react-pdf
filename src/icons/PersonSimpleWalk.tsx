import { PersonSimpleWalkIcon as PersonSimpleWalkBoldIcon } from "../bold/PersonSimpleWalk";
import { PersonSimpleWalkIcon as PersonSimpleWalkDuotoneIcon } from "../duotone/PersonSimpleWalk";
import { PersonSimpleWalkIcon as PersonSimpleWalkFillIcon } from "../fill/PersonSimpleWalk";
import { PersonSimpleWalkIcon as PersonSimpleWalkLightIcon } from "../light/PersonSimpleWalk";
import { PersonSimpleWalkIcon as PersonSimpleWalkRegularIcon } from "../regular/PersonSimpleWalk";
import { PersonSimpleWalkIcon as PersonSimpleWalkThinIcon } from "../thin/PersonSimpleWalk";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PersonSimpleWalkThinIcon,
	light: PersonSimpleWalkLightIcon,
	regular: PersonSimpleWalkRegularIcon,
	bold: PersonSimpleWalkBoldIcon,
	fill: PersonSimpleWalkFillIcon,
	duotone: PersonSimpleWalkDuotoneIcon,
} as const;

export function PersonSimpleWalkIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PersonSimpleWalkIcon as PersonSimpleWalk };
