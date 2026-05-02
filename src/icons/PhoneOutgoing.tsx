import { PhoneOutgoingIcon as PhoneOutgoingBoldIcon } from "../bold/PhoneOutgoing";
import { PhoneOutgoingIcon as PhoneOutgoingDuotoneIcon } from "../duotone/PhoneOutgoing";
import { PhoneOutgoingIcon as PhoneOutgoingFillIcon } from "../fill/PhoneOutgoing";
import { PhoneOutgoingIcon as PhoneOutgoingLightIcon } from "../light/PhoneOutgoing";
import { PhoneOutgoingIcon as PhoneOutgoingRegularIcon } from "../regular/PhoneOutgoing";
import { PhoneOutgoingIcon as PhoneOutgoingThinIcon } from "../thin/PhoneOutgoing";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PhoneOutgoingThinIcon,
	light: PhoneOutgoingLightIcon,
	regular: PhoneOutgoingRegularIcon,
	bold: PhoneOutgoingBoldIcon,
	fill: PhoneOutgoingFillIcon,
	duotone: PhoneOutgoingDuotoneIcon,
} as const;

export function PhoneOutgoingIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PhoneOutgoingIcon as PhoneOutgoing };
