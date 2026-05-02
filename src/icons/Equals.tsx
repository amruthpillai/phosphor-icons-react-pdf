import { EqualsIcon as EqualsBoldIcon } from "../bold/Equals";
import { EqualsIcon as EqualsDuotoneIcon } from "../duotone/Equals";
import { EqualsIcon as EqualsFillIcon } from "../fill/Equals";
import { EqualsIcon as EqualsLightIcon } from "../light/Equals";
import { EqualsIcon as EqualsRegularIcon } from "../regular/Equals";
import { EqualsIcon as EqualsThinIcon } from "../thin/Equals";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EqualsThinIcon,
	light: EqualsLightIcon,
	regular: EqualsRegularIcon,
	bold: EqualsBoldIcon,
	fill: EqualsFillIcon,
	duotone: EqualsDuotoneIcon,
} as const;

export function EqualsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EqualsIcon as Equals };
