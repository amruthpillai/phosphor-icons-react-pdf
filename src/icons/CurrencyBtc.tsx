import { CurrencyBtcIcon as CurrencyBtcBoldIcon } from "../bold/CurrencyBtc";
import { CurrencyBtcIcon as CurrencyBtcDuotoneIcon } from "../duotone/CurrencyBtc";
import { CurrencyBtcIcon as CurrencyBtcFillIcon } from "../fill/CurrencyBtc";
import { CurrencyBtcIcon as CurrencyBtcLightIcon } from "../light/CurrencyBtc";
import { CurrencyBtcIcon as CurrencyBtcRegularIcon } from "../regular/CurrencyBtc";
import { CurrencyBtcIcon as CurrencyBtcThinIcon } from "../thin/CurrencyBtc";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CurrencyBtcThinIcon,
	light: CurrencyBtcLightIcon,
	regular: CurrencyBtcRegularIcon,
	bold: CurrencyBtcBoldIcon,
	fill: CurrencyBtcFillIcon,
	duotone: CurrencyBtcDuotoneIcon,
} as const;

export function CurrencyBtcIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CurrencyBtcIcon as CurrencyBtc };
