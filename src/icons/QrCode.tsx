import { QrCodeIcon as QrCodeBoldIcon } from "../bold/QrCode";
import { QrCodeIcon as QrCodeDuotoneIcon } from "../duotone/QrCode";
import { QrCodeIcon as QrCodeFillIcon } from "../fill/QrCode";
import { QrCodeIcon as QrCodeLightIcon } from "../light/QrCode";
import { QrCodeIcon as QrCodeRegularIcon } from "../regular/QrCode";
import { QrCodeIcon as QrCodeThinIcon } from "../thin/QrCode";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: QrCodeThinIcon,
	light: QrCodeLightIcon,
	regular: QrCodeRegularIcon,
	bold: QrCodeBoldIcon,
	fill: QrCodeFillIcon,
	duotone: QrCodeDuotoneIcon,
} as const;

export function QrCodeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { QrCodeIcon as QrCode };
