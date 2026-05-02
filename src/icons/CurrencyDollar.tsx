import { CurrencyDollarIcon as CurrencyDollarBoldIcon } from "../bold/CurrencyDollar";
import { CurrencyDollarIcon as CurrencyDollarDuotoneIcon } from "../duotone/CurrencyDollar";
import { CurrencyDollarIcon as CurrencyDollarFillIcon } from "../fill/CurrencyDollar";
import { CurrencyDollarIcon as CurrencyDollarLightIcon } from "../light/CurrencyDollar";
import { CurrencyDollarIcon as CurrencyDollarRegularIcon } from "../regular/CurrencyDollar";
import { CurrencyDollarIcon as CurrencyDollarThinIcon } from "../thin/CurrencyDollar";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CurrencyDollarThinIcon,
	light: CurrencyDollarLightIcon,
	regular: CurrencyDollarRegularIcon,
	bold: CurrencyDollarBoldIcon,
	fill: CurrencyDollarFillIcon,
	duotone: CurrencyDollarDuotoneIcon,
} as const;

export function CurrencyDollarIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CurrencyDollarIcon as CurrencyDollar };
