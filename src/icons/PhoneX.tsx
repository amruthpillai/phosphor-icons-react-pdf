import { PhoneXIcon as PhoneXBoldIcon } from "../bold/PhoneX";
import { PhoneXIcon as PhoneXDuotoneIcon } from "../duotone/PhoneX";
import { PhoneXIcon as PhoneXFillIcon } from "../fill/PhoneX";
import { PhoneXIcon as PhoneXLightIcon } from "../light/PhoneX";
import { PhoneXIcon as PhoneXRegularIcon } from "../regular/PhoneX";
import { PhoneXIcon as PhoneXThinIcon } from "../thin/PhoneX";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PhoneXThinIcon,
	light: PhoneXLightIcon,
	regular: PhoneXRegularIcon,
	bold: PhoneXBoldIcon,
	fill: PhoneXFillIcon,
	duotone: PhoneXDuotoneIcon,
} as const;

export function PhoneXIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PhoneXIcon as PhoneX };
