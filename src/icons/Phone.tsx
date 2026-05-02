import { PhoneIcon as PhoneBoldIcon } from "../bold/Phone";
import { PhoneIcon as PhoneDuotoneIcon } from "../duotone/Phone";
import { PhoneIcon as PhoneFillIcon } from "../fill/Phone";
import { PhoneIcon as PhoneLightIcon } from "../light/Phone";
import { PhoneIcon as PhoneRegularIcon } from "../regular/Phone";
import { PhoneIcon as PhoneThinIcon } from "../thin/Phone";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PhoneThinIcon,
	light: PhoneLightIcon,
	regular: PhoneRegularIcon,
	bold: PhoneBoldIcon,
	fill: PhoneFillIcon,
	duotone: PhoneDuotoneIcon,
} as const;

export function PhoneIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PhoneIcon as Phone };
