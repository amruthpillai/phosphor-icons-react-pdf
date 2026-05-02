import { CurrencyGbpIcon as CurrencyGbpBoldIcon } from "../bold/CurrencyGbp";
import { CurrencyGbpIcon as CurrencyGbpDuotoneIcon } from "../duotone/CurrencyGbp";
import { CurrencyGbpIcon as CurrencyGbpFillIcon } from "../fill/CurrencyGbp";
import { CurrencyGbpIcon as CurrencyGbpLightIcon } from "../light/CurrencyGbp";
import { CurrencyGbpIcon as CurrencyGbpRegularIcon } from "../regular/CurrencyGbp";
import { CurrencyGbpIcon as CurrencyGbpThinIcon } from "../thin/CurrencyGbp";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CurrencyGbpThinIcon,
	light: CurrencyGbpLightIcon,
	regular: CurrencyGbpRegularIcon,
	bold: CurrencyGbpBoldIcon,
	fill: CurrencyGbpFillIcon,
	duotone: CurrencyGbpDuotoneIcon,
} as const;

export function CurrencyGbpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CurrencyGbpIcon as CurrencyGbp };
