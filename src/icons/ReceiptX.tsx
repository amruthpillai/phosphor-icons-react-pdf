import { ReceiptXIcon as ReceiptXBoldIcon } from "../bold/ReceiptX";
import { ReceiptXIcon as ReceiptXDuotoneIcon } from "../duotone/ReceiptX";
import { ReceiptXIcon as ReceiptXFillIcon } from "../fill/ReceiptX";
import { ReceiptXIcon as ReceiptXLightIcon } from "../light/ReceiptX";
import { ReceiptXIcon as ReceiptXRegularIcon } from "../regular/ReceiptX";
import { ReceiptXIcon as ReceiptXThinIcon } from "../thin/ReceiptX";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ReceiptXThinIcon,
	light: ReceiptXLightIcon,
	regular: ReceiptXRegularIcon,
	bold: ReceiptXBoldIcon,
	fill: ReceiptXFillIcon,
	duotone: ReceiptXDuotoneIcon,
} as const;

export function ReceiptXIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ReceiptXIcon as ReceiptX };
