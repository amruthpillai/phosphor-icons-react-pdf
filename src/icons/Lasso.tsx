import { LassoIcon as LassoBoldIcon } from "../bold/Lasso";
import { LassoIcon as LassoDuotoneIcon } from "../duotone/Lasso";
import { LassoIcon as LassoFillIcon } from "../fill/Lasso";
import { LassoIcon as LassoLightIcon } from "../light/Lasso";
import { LassoIcon as LassoRegularIcon } from "../regular/Lasso";
import { LassoIcon as LassoThinIcon } from "../thin/Lasso";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LassoThinIcon,
	light: LassoLightIcon,
	regular: LassoRegularIcon,
	bold: LassoBoldIcon,
	fill: LassoFillIcon,
	duotone: LassoDuotoneIcon,
} as const;

export function LassoIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LassoIcon as Lasso };
