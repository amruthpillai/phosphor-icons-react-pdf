import { ContactlessPaymentIcon as ContactlessPaymentBoldIcon } from "../bold/ContactlessPayment";
import { ContactlessPaymentIcon as ContactlessPaymentDuotoneIcon } from "../duotone/ContactlessPayment";
import { ContactlessPaymentIcon as ContactlessPaymentFillIcon } from "../fill/ContactlessPayment";
import { ContactlessPaymentIcon as ContactlessPaymentLightIcon } from "../light/ContactlessPayment";
import { ContactlessPaymentIcon as ContactlessPaymentRegularIcon } from "../regular/ContactlessPayment";
import { ContactlessPaymentIcon as ContactlessPaymentThinIcon } from "../thin/ContactlessPayment";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ContactlessPaymentThinIcon,
	light: ContactlessPaymentLightIcon,
	regular: ContactlessPaymentRegularIcon,
	bold: ContactlessPaymentBoldIcon,
	fill: ContactlessPaymentFillIcon,
	duotone: ContactlessPaymentDuotoneIcon,
} as const;

export function ContactlessPaymentIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ContactlessPaymentIcon as ContactlessPayment };
