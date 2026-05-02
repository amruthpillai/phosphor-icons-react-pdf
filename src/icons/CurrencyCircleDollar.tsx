import { CurrencyCircleDollarIcon as CurrencyCircleDollarBoldIcon } from "../bold/CurrencyCircleDollar";
import { CurrencyCircleDollarIcon as CurrencyCircleDollarDuotoneIcon } from "../duotone/CurrencyCircleDollar";
import { CurrencyCircleDollarIcon as CurrencyCircleDollarFillIcon } from "../fill/CurrencyCircleDollar";
import { CurrencyCircleDollarIcon as CurrencyCircleDollarLightIcon } from "../light/CurrencyCircleDollar";
import { CurrencyCircleDollarIcon as CurrencyCircleDollarRegularIcon } from "../regular/CurrencyCircleDollar";
import { CurrencyCircleDollarIcon as CurrencyCircleDollarThinIcon } from "../thin/CurrencyCircleDollar";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CurrencyCircleDollarThinIcon,
	light: CurrencyCircleDollarLightIcon,
	regular: CurrencyCircleDollarRegularIcon,
	bold: CurrencyCircleDollarBoldIcon,
	fill: CurrencyCircleDollarFillIcon,
	duotone: CurrencyCircleDollarDuotoneIcon,
} as const;

export function CurrencyCircleDollarIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CurrencyCircleDollarIcon as CurrencyCircleDollar };
