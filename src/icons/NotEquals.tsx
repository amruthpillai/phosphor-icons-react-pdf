import { NotEqualsIcon as NotEqualsBoldIcon } from "../bold/NotEquals";
import { NotEqualsIcon as NotEqualsDuotoneIcon } from "../duotone/NotEquals";
import { NotEqualsIcon as NotEqualsFillIcon } from "../fill/NotEquals";
import { NotEqualsIcon as NotEqualsLightIcon } from "../light/NotEquals";
import { NotEqualsIcon as NotEqualsRegularIcon } from "../regular/NotEquals";
import { NotEqualsIcon as NotEqualsThinIcon } from "../thin/NotEquals";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: NotEqualsThinIcon,
	light: NotEqualsLightIcon,
	regular: NotEqualsRegularIcon,
	bold: NotEqualsBoldIcon,
	fill: NotEqualsFillIcon,
	duotone: NotEqualsDuotoneIcon,
} as const;

export function NotEqualsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { NotEqualsIcon as NotEquals };
