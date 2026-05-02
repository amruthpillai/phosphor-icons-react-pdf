import { CurrencyDollarSimpleIcon as CurrencyDollarSimpleBoldIcon } from "../bold/CurrencyDollarSimple";
import { CurrencyDollarSimpleIcon as CurrencyDollarSimpleDuotoneIcon } from "../duotone/CurrencyDollarSimple";
import { CurrencyDollarSimpleIcon as CurrencyDollarSimpleFillIcon } from "../fill/CurrencyDollarSimple";
import { CurrencyDollarSimpleIcon as CurrencyDollarSimpleLightIcon } from "../light/CurrencyDollarSimple";
import { CurrencyDollarSimpleIcon as CurrencyDollarSimpleRegularIcon } from "../regular/CurrencyDollarSimple";
import { CurrencyDollarSimpleIcon as CurrencyDollarSimpleThinIcon } from "../thin/CurrencyDollarSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CurrencyDollarSimpleThinIcon,
	light: CurrencyDollarSimpleLightIcon,
	regular: CurrencyDollarSimpleRegularIcon,
	bold: CurrencyDollarSimpleBoldIcon,
	fill: CurrencyDollarSimpleFillIcon,
	duotone: CurrencyDollarSimpleDuotoneIcon,
} as const;

export function CurrencyDollarSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CurrencyDollarSimpleIcon as CurrencyDollarSimple };
