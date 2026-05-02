import { PersonSimpleCircleIcon as PersonSimpleCircleBoldIcon } from "../bold/PersonSimpleCircle";
import { PersonSimpleCircleIcon as PersonSimpleCircleDuotoneIcon } from "../duotone/PersonSimpleCircle";
import { PersonSimpleCircleIcon as PersonSimpleCircleFillIcon } from "../fill/PersonSimpleCircle";
import { PersonSimpleCircleIcon as PersonSimpleCircleLightIcon } from "../light/PersonSimpleCircle";
import { PersonSimpleCircleIcon as PersonSimpleCircleRegularIcon } from "../regular/PersonSimpleCircle";
import { PersonSimpleCircleIcon as PersonSimpleCircleThinIcon } from "../thin/PersonSimpleCircle";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PersonSimpleCircleThinIcon,
	light: PersonSimpleCircleLightIcon,
	regular: PersonSimpleCircleRegularIcon,
	bold: PersonSimpleCircleBoldIcon,
	fill: PersonSimpleCircleFillIcon,
	duotone: PersonSimpleCircleDuotoneIcon,
} as const;

export function PersonSimpleCircleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PersonSimpleCircleIcon as PersonSimpleCircle };
