import { CurrencyCnyIcon as CurrencyCnyBoldIcon } from "../bold/CurrencyCny";
import { CurrencyCnyIcon as CurrencyCnyDuotoneIcon } from "../duotone/CurrencyCny";
import { CurrencyCnyIcon as CurrencyCnyFillIcon } from "../fill/CurrencyCny";
import { CurrencyCnyIcon as CurrencyCnyLightIcon } from "../light/CurrencyCny";
import { CurrencyCnyIcon as CurrencyCnyRegularIcon } from "../regular/CurrencyCny";
import { CurrencyCnyIcon as CurrencyCnyThinIcon } from "../thin/CurrencyCny";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CurrencyCnyThinIcon,
	light: CurrencyCnyLightIcon,
	regular: CurrencyCnyRegularIcon,
	bold: CurrencyCnyBoldIcon,
	fill: CurrencyCnyFillIcon,
	duotone: CurrencyCnyDuotoneIcon,
} as const;

export function CurrencyCnyIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CurrencyCnyIcon as CurrencyCny };
