import { CurrencyEurIcon as CurrencyEurBoldIcon } from "../bold/CurrencyEur";
import { CurrencyEurIcon as CurrencyEurDuotoneIcon } from "../duotone/CurrencyEur";
import { CurrencyEurIcon as CurrencyEurFillIcon } from "../fill/CurrencyEur";
import { CurrencyEurIcon as CurrencyEurLightIcon } from "../light/CurrencyEur";
import { CurrencyEurIcon as CurrencyEurRegularIcon } from "../regular/CurrencyEur";
import { CurrencyEurIcon as CurrencyEurThinIcon } from "../thin/CurrencyEur";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CurrencyEurThinIcon,
	light: CurrencyEurLightIcon,
	regular: CurrencyEurRegularIcon,
	bold: CurrencyEurBoldIcon,
	fill: CurrencyEurFillIcon,
	duotone: CurrencyEurDuotoneIcon,
} as const;

export function CurrencyEurIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CurrencyEurIcon as CurrencyEur };
