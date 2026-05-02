import { CurrencyJpyIcon as CurrencyJpyBoldIcon } from "../bold/CurrencyJpy";
import { CurrencyJpyIcon as CurrencyJpyDuotoneIcon } from "../duotone/CurrencyJpy";
import { CurrencyJpyIcon as CurrencyJpyFillIcon } from "../fill/CurrencyJpy";
import { CurrencyJpyIcon as CurrencyJpyLightIcon } from "../light/CurrencyJpy";
import { CurrencyJpyIcon as CurrencyJpyRegularIcon } from "../regular/CurrencyJpy";
import { CurrencyJpyIcon as CurrencyJpyThinIcon } from "../thin/CurrencyJpy";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CurrencyJpyThinIcon,
	light: CurrencyJpyLightIcon,
	regular: CurrencyJpyRegularIcon,
	bold: CurrencyJpyBoldIcon,
	fill: CurrencyJpyFillIcon,
	duotone: CurrencyJpyDuotoneIcon,
} as const;

export function CurrencyJpyIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CurrencyJpyIcon as CurrencyJpy };
