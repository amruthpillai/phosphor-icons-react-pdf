import { CurrencyNgnIcon as CurrencyNgnBoldIcon } from "../bold/CurrencyNgn";
import { CurrencyNgnIcon as CurrencyNgnDuotoneIcon } from "../duotone/CurrencyNgn";
import { CurrencyNgnIcon as CurrencyNgnFillIcon } from "../fill/CurrencyNgn";
import { CurrencyNgnIcon as CurrencyNgnLightIcon } from "../light/CurrencyNgn";
import { CurrencyNgnIcon as CurrencyNgnRegularIcon } from "../regular/CurrencyNgn";
import { CurrencyNgnIcon as CurrencyNgnThinIcon } from "../thin/CurrencyNgn";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CurrencyNgnThinIcon,
	light: CurrencyNgnLightIcon,
	regular: CurrencyNgnRegularIcon,
	bold: CurrencyNgnBoldIcon,
	fill: CurrencyNgnFillIcon,
	duotone: CurrencyNgnDuotoneIcon,
} as const;

export function CurrencyNgnIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CurrencyNgnIcon as CurrencyNgn };
