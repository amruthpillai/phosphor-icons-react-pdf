import { PhoneDisconnectIcon as PhoneDisconnectBoldIcon } from "../bold/PhoneDisconnect";
import { PhoneDisconnectIcon as PhoneDisconnectDuotoneIcon } from "../duotone/PhoneDisconnect";
import { PhoneDisconnectIcon as PhoneDisconnectFillIcon } from "../fill/PhoneDisconnect";
import { PhoneDisconnectIcon as PhoneDisconnectLightIcon } from "../light/PhoneDisconnect";
import { PhoneDisconnectIcon as PhoneDisconnectRegularIcon } from "../regular/PhoneDisconnect";
import { PhoneDisconnectIcon as PhoneDisconnectThinIcon } from "../thin/PhoneDisconnect";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PhoneDisconnectThinIcon,
	light: PhoneDisconnectLightIcon,
	regular: PhoneDisconnectRegularIcon,
	bold: PhoneDisconnectBoldIcon,
	fill: PhoneDisconnectFillIcon,
	duotone: PhoneDisconnectDuotoneIcon,
} as const;

export function PhoneDisconnectIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PhoneDisconnectIcon as PhoneDisconnect };
