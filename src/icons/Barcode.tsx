import { BarcodeIcon as BarcodeBoldIcon } from "../bold/Barcode";
import { BarcodeIcon as BarcodeDuotoneIcon } from "../duotone/Barcode";
import { BarcodeIcon as BarcodeFillIcon } from "../fill/Barcode";
import { BarcodeIcon as BarcodeLightIcon } from "../light/Barcode";
import { BarcodeIcon as BarcodeRegularIcon } from "../regular/Barcode";
import { BarcodeIcon as BarcodeThinIcon } from "../thin/Barcode";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BarcodeThinIcon,
	light: BarcodeLightIcon,
	regular: BarcodeRegularIcon,
	bold: BarcodeBoldIcon,
	fill: BarcodeFillIcon,
	duotone: BarcodeDuotoneIcon,
} as const;

export function BarcodeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BarcodeIcon as Barcode };
