import { ApproximateEqualsIcon as ApproximateEqualsBoldIcon } from "../bold/ApproximateEquals";
import { ApproximateEqualsIcon as ApproximateEqualsDuotoneIcon } from "../duotone/ApproximateEquals";
import { ApproximateEqualsIcon as ApproximateEqualsFillIcon } from "../fill/ApproximateEquals";
import { ApproximateEqualsIcon as ApproximateEqualsLightIcon } from "../light/ApproximateEquals";
import { ApproximateEqualsIcon as ApproximateEqualsRegularIcon } from "../regular/ApproximateEquals";
import { ApproximateEqualsIcon as ApproximateEqualsThinIcon } from "../thin/ApproximateEquals";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ApproximateEqualsThinIcon,
	light: ApproximateEqualsLightIcon,
	regular: ApproximateEqualsRegularIcon,
	bold: ApproximateEqualsBoldIcon,
	fill: ApproximateEqualsFillIcon,
	duotone: ApproximateEqualsDuotoneIcon,
} as const;

export function ApproximateEqualsIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ApproximateEqualsIcon as ApproximateEquals };
