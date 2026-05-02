import { PhoneIncomingIcon as PhoneIncomingBoldIcon } from "../bold/PhoneIncoming";
import { PhoneIncomingIcon as PhoneIncomingDuotoneIcon } from "../duotone/PhoneIncoming";
import { PhoneIncomingIcon as PhoneIncomingFillIcon } from "../fill/PhoneIncoming";
import { PhoneIncomingIcon as PhoneIncomingLightIcon } from "../light/PhoneIncoming";
import { PhoneIncomingIcon as PhoneIncomingRegularIcon } from "../regular/PhoneIncoming";
import { PhoneIncomingIcon as PhoneIncomingThinIcon } from "../thin/PhoneIncoming";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PhoneIncomingThinIcon,
	light: PhoneIncomingLightIcon,
	regular: PhoneIncomingRegularIcon,
	bold: PhoneIncomingBoldIcon,
	fill: PhoneIncomingFillIcon,
	duotone: PhoneIncomingDuotoneIcon,
} as const;

export function PhoneIncomingIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PhoneIncomingIcon as PhoneIncoming };
