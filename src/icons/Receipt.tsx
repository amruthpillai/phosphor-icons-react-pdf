import { ReceiptIcon as ReceiptBoldIcon } from "../bold/Receipt";
import { ReceiptIcon as ReceiptDuotoneIcon } from "../duotone/Receipt";
import { ReceiptIcon as ReceiptFillIcon } from "../fill/Receipt";
import { ReceiptIcon as ReceiptLightIcon } from "../light/Receipt";
import { ReceiptIcon as ReceiptRegularIcon } from "../regular/Receipt";
import { ReceiptIcon as ReceiptThinIcon } from "../thin/Receipt";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ReceiptThinIcon,
	light: ReceiptLightIcon,
	regular: ReceiptRegularIcon,
	bold: ReceiptBoldIcon,
	fill: ReceiptFillIcon,
	duotone: ReceiptDuotoneIcon,
} as const;

export function ReceiptIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ReceiptIcon as Receipt };
