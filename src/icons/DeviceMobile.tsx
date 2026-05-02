import { DeviceMobileIcon as DeviceMobileBoldIcon } from "../bold/DeviceMobile";
import { DeviceMobileIcon as DeviceMobileDuotoneIcon } from "../duotone/DeviceMobile";
import { DeviceMobileIcon as DeviceMobileFillIcon } from "../fill/DeviceMobile";
import { DeviceMobileIcon as DeviceMobileLightIcon } from "../light/DeviceMobile";
import { DeviceMobileIcon as DeviceMobileRegularIcon } from "../regular/DeviceMobile";
import { DeviceMobileIcon as DeviceMobileThinIcon } from "../thin/DeviceMobile";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DeviceMobileThinIcon,
	light: DeviceMobileLightIcon,
	regular: DeviceMobileRegularIcon,
	bold: DeviceMobileBoldIcon,
	fill: DeviceMobileFillIcon,
	duotone: DeviceMobileDuotoneIcon,
} as const;

export function DeviceMobileIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DeviceMobileIcon as DeviceMobile };
