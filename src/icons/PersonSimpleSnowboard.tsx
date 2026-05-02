import { PersonSimpleSnowboardIcon as PersonSimpleSnowboardBoldIcon } from "../bold/PersonSimpleSnowboard";
import { PersonSimpleSnowboardIcon as PersonSimpleSnowboardDuotoneIcon } from "../duotone/PersonSimpleSnowboard";
import { PersonSimpleSnowboardIcon as PersonSimpleSnowboardFillIcon } from "../fill/PersonSimpleSnowboard";
import { PersonSimpleSnowboardIcon as PersonSimpleSnowboardLightIcon } from "../light/PersonSimpleSnowboard";
import { PersonSimpleSnowboardIcon as PersonSimpleSnowboardRegularIcon } from "../regular/PersonSimpleSnowboard";
import { PersonSimpleSnowboardIcon as PersonSimpleSnowboardThinIcon } from "../thin/PersonSimpleSnowboard";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PersonSimpleSnowboardThinIcon,
	light: PersonSimpleSnowboardLightIcon,
	regular: PersonSimpleSnowboardRegularIcon,
	bold: PersonSimpleSnowboardBoldIcon,
	fill: PersonSimpleSnowboardFillIcon,
	duotone: PersonSimpleSnowboardDuotoneIcon,
} as const;

export function PersonSimpleSnowboardIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PersonSimpleSnowboardIcon as PersonSimpleSnowboard };
