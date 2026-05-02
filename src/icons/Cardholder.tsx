import { CardholderIcon as CardholderBoldIcon } from "../bold/Cardholder";
import { CardholderIcon as CardholderDuotoneIcon } from "../duotone/Cardholder";
import { CardholderIcon as CardholderFillIcon } from "../fill/Cardholder";
import { CardholderIcon as CardholderLightIcon } from "../light/Cardholder";
import { CardholderIcon as CardholderRegularIcon } from "../regular/Cardholder";
import { CardholderIcon as CardholderThinIcon } from "../thin/Cardholder";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CardholderThinIcon,
	light: CardholderLightIcon,
	regular: CardholderRegularIcon,
	bold: CardholderBoldIcon,
	fill: CardholderFillIcon,
	duotone: CardholderDuotoneIcon,
} as const;

export function CardholderIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CardholderIcon as Cardholder };
