import { PrinterIcon as PrinterBoldIcon } from "../bold/Printer";
import { PrinterIcon as PrinterDuotoneIcon } from "../duotone/Printer";
import { PrinterIcon as PrinterFillIcon } from "../fill/Printer";
import { PrinterIcon as PrinterLightIcon } from "../light/Printer";
import { PrinterIcon as PrinterRegularIcon } from "../regular/Printer";
import { PrinterIcon as PrinterThinIcon } from "../thin/Printer";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PrinterThinIcon,
	light: PrinterLightIcon,
	regular: PrinterRegularIcon,
	bold: PrinterBoldIcon,
	fill: PrinterFillIcon,
	duotone: PrinterDuotoneIcon,
} as const;

export function PrinterIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PrinterIcon as Printer };
