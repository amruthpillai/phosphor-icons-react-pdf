import { CurrencyKrwIcon as CurrencyKrwBoldIcon } from "../bold/CurrencyKrw";
import { CurrencyKrwIcon as CurrencyKrwDuotoneIcon } from "../duotone/CurrencyKrw";
import { CurrencyKrwIcon as CurrencyKrwFillIcon } from "../fill/CurrencyKrw";
import { CurrencyKrwIcon as CurrencyKrwLightIcon } from "../light/CurrencyKrw";
import { CurrencyKrwIcon as CurrencyKrwRegularIcon } from "../regular/CurrencyKrw";
import { CurrencyKrwIcon as CurrencyKrwThinIcon } from "../thin/CurrencyKrw";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CurrencyKrwThinIcon,
	light: CurrencyKrwLightIcon,
	regular: CurrencyKrwRegularIcon,
	bold: CurrencyKrwBoldIcon,
	fill: CurrencyKrwFillIcon,
	duotone: CurrencyKrwDuotoneIcon,
} as const;

export function CurrencyKrwIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CurrencyKrwIcon as CurrencyKrw };
