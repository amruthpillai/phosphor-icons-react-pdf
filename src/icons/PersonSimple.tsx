import { PersonSimpleIcon as PersonSimpleBoldIcon } from "../bold/PersonSimple";
import { PersonSimpleIcon as PersonSimpleDuotoneIcon } from "../duotone/PersonSimple";
import { PersonSimpleIcon as PersonSimpleFillIcon } from "../fill/PersonSimple";
import { PersonSimpleIcon as PersonSimpleLightIcon } from "../light/PersonSimple";
import { PersonSimpleIcon as PersonSimpleRegularIcon } from "../regular/PersonSimple";
import { PersonSimpleIcon as PersonSimpleThinIcon } from "../thin/PersonSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PersonSimpleThinIcon,
	light: PersonSimpleLightIcon,
	regular: PersonSimpleRegularIcon,
	bold: PersonSimpleBoldIcon,
	fill: PersonSimpleFillIcon,
	duotone: PersonSimpleDuotoneIcon,
} as const;

export function PersonSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PersonSimpleIcon as PersonSimple };
