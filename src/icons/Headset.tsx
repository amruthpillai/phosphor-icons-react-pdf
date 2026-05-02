import { HeadsetIcon as HeadsetBoldIcon } from "../bold/Headset";
import { HeadsetIcon as HeadsetDuotoneIcon } from "../duotone/Headset";
import { HeadsetIcon as HeadsetFillIcon } from "../fill/Headset";
import { HeadsetIcon as HeadsetLightIcon } from "../light/Headset";
import { HeadsetIcon as HeadsetRegularIcon } from "../regular/Headset";
import { HeadsetIcon as HeadsetThinIcon } from "../thin/Headset";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HeadsetThinIcon,
	light: HeadsetLightIcon,
	regular: HeadsetRegularIcon,
	bold: HeadsetBoldIcon,
	fill: HeadsetFillIcon,
	duotone: HeadsetDuotoneIcon,
} as const;

export function HeadsetIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HeadsetIcon as Headset };
