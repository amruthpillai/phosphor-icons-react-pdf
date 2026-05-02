import { PhoneCallIcon as PhoneCallBoldIcon } from "../bold/PhoneCall";
import { PhoneCallIcon as PhoneCallDuotoneIcon } from "../duotone/PhoneCall";
import { PhoneCallIcon as PhoneCallFillIcon } from "../fill/PhoneCall";
import { PhoneCallIcon as PhoneCallLightIcon } from "../light/PhoneCall";
import { PhoneCallIcon as PhoneCallRegularIcon } from "../regular/PhoneCall";
import { PhoneCallIcon as PhoneCallThinIcon } from "../thin/PhoneCall";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PhoneCallThinIcon,
	light: PhoneCallLightIcon,
	regular: PhoneCallRegularIcon,
	bold: PhoneCallBoldIcon,
	fill: PhoneCallFillIcon,
	duotone: PhoneCallDuotoneIcon,
} as const;

export function PhoneCallIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PhoneCallIcon as PhoneCall };
