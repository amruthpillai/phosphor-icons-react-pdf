import { PhoneTransferIcon as PhoneTransferBoldIcon } from "../bold/PhoneTransfer";
import { PhoneTransferIcon as PhoneTransferDuotoneIcon } from "../duotone/PhoneTransfer";
import { PhoneTransferIcon as PhoneTransferFillIcon } from "../fill/PhoneTransfer";
import { PhoneTransferIcon as PhoneTransferLightIcon } from "../light/PhoneTransfer";
import { PhoneTransferIcon as PhoneTransferRegularIcon } from "../regular/PhoneTransfer";
import { PhoneTransferIcon as PhoneTransferThinIcon } from "../thin/PhoneTransfer";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PhoneTransferThinIcon,
	light: PhoneTransferLightIcon,
	regular: PhoneTransferRegularIcon,
	bold: PhoneTransferBoldIcon,
	fill: PhoneTransferFillIcon,
	duotone: PhoneTransferDuotoneIcon,
} as const;

export function PhoneTransferIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PhoneTransferIcon as PhoneTransfer };
