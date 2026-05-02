import { CreditCardIcon as CreditCardBoldIcon } from "../bold/CreditCard";
import { CreditCardIcon as CreditCardDuotoneIcon } from "../duotone/CreditCard";
import { CreditCardIcon as CreditCardFillIcon } from "../fill/CreditCard";
import { CreditCardIcon as CreditCardLightIcon } from "../light/CreditCard";
import { CreditCardIcon as CreditCardRegularIcon } from "../regular/CreditCard";
import { CreditCardIcon as CreditCardThinIcon } from "../thin/CreditCard";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CreditCardThinIcon,
	light: CreditCardLightIcon,
	regular: CreditCardRegularIcon,
	bold: CreditCardBoldIcon,
	fill: CreditCardFillIcon,
	duotone: CreditCardDuotoneIcon,
} as const;

export function CreditCardIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CreditCardIcon as CreditCard };
