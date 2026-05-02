import { CurrencyKztIcon as CurrencyKztBoldIcon } from "../bold/CurrencyKzt";
import { CurrencyKztIcon as CurrencyKztDuotoneIcon } from "../duotone/CurrencyKzt";
import { CurrencyKztIcon as CurrencyKztFillIcon } from "../fill/CurrencyKzt";
import { CurrencyKztIcon as CurrencyKztLightIcon } from "../light/CurrencyKzt";
import { CurrencyKztIcon as CurrencyKztRegularIcon } from "../regular/CurrencyKzt";
import { CurrencyKztIcon as CurrencyKztThinIcon } from "../thin/CurrencyKzt";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CurrencyKztThinIcon,
	light: CurrencyKztLightIcon,
	regular: CurrencyKztRegularIcon,
	bold: CurrencyKztBoldIcon,
	fill: CurrencyKztFillIcon,
	duotone: CurrencyKztDuotoneIcon,
} as const;

export function CurrencyKztIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CurrencyKztIcon as CurrencyKzt };
