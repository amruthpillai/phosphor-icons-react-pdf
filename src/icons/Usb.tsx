import { UsbIcon as UsbBoldIcon } from "../bold/Usb";
import { UsbIcon as UsbDuotoneIcon } from "../duotone/Usb";
import { UsbIcon as UsbFillIcon } from "../fill/Usb";
import { UsbIcon as UsbLightIcon } from "../light/Usb";
import { UsbIcon as UsbRegularIcon } from "../regular/Usb";
import { UsbIcon as UsbThinIcon } from "../thin/Usb";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UsbThinIcon,
	light: UsbLightIcon,
	regular: UsbRegularIcon,
	bold: UsbBoldIcon,
	fill: UsbFillIcon,
	duotone: UsbDuotoneIcon,
} as const;

export function UsbIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UsbIcon as Usb };
