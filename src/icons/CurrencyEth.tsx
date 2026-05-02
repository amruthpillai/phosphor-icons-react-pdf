import { CurrencyEthIcon as CurrencyEthBoldIcon } from "../bold/CurrencyEth";
import { CurrencyEthIcon as CurrencyEthDuotoneIcon } from "../duotone/CurrencyEth";
import { CurrencyEthIcon as CurrencyEthFillIcon } from "../fill/CurrencyEth";
import { CurrencyEthIcon as CurrencyEthLightIcon } from "../light/CurrencyEth";
import { CurrencyEthIcon as CurrencyEthRegularIcon } from "../regular/CurrencyEth";
import { CurrencyEthIcon as CurrencyEthThinIcon } from "../thin/CurrencyEth";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CurrencyEthThinIcon,
	light: CurrencyEthLightIcon,
	regular: CurrencyEthRegularIcon,
	bold: CurrencyEthBoldIcon,
	fill: CurrencyEthFillIcon,
	duotone: CurrencyEthDuotoneIcon,
} as const;

export function CurrencyEthIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CurrencyEthIcon as CurrencyEth };
