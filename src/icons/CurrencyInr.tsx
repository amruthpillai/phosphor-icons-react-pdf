import { CurrencyInrIcon as CurrencyInrBoldIcon } from "../bold/CurrencyInr";
import { CurrencyInrIcon as CurrencyInrDuotoneIcon } from "../duotone/CurrencyInr";
import { CurrencyInrIcon as CurrencyInrFillIcon } from "../fill/CurrencyInr";
import { CurrencyInrIcon as CurrencyInrLightIcon } from "../light/CurrencyInr";
import { CurrencyInrIcon as CurrencyInrRegularIcon } from "../regular/CurrencyInr";
import { CurrencyInrIcon as CurrencyInrThinIcon } from "../thin/CurrencyInr";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CurrencyInrThinIcon,
	light: CurrencyInrLightIcon,
	regular: CurrencyInrRegularIcon,
	bold: CurrencyInrBoldIcon,
	fill: CurrencyInrFillIcon,
	duotone: CurrencyInrDuotoneIcon,
} as const;

export function CurrencyInrIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CurrencyInrIcon as CurrencyInr };
