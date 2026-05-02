import { InvoiceIcon as InvoiceBoldIcon } from "../bold/Invoice";
import { InvoiceIcon as InvoiceDuotoneIcon } from "../duotone/Invoice";
import { InvoiceIcon as InvoiceFillIcon } from "../fill/Invoice";
import { InvoiceIcon as InvoiceLightIcon } from "../light/Invoice";
import { InvoiceIcon as InvoiceRegularIcon } from "../regular/Invoice";
import { InvoiceIcon as InvoiceThinIcon } from "../thin/Invoice";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: InvoiceThinIcon,
	light: InvoiceLightIcon,
	regular: InvoiceRegularIcon,
	bold: InvoiceBoldIcon,
	fill: InvoiceFillIcon,
	duotone: InvoiceDuotoneIcon,
} as const;

export function InvoiceIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { InvoiceIcon as Invoice };
