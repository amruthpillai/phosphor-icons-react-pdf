import { PushPinIcon as PushPinBoldIcon } from "../bold/PushPin";
import { PushPinIcon as PushPinDuotoneIcon } from "../duotone/PushPin";
import { PushPinIcon as PushPinFillIcon } from "../fill/PushPin";
import { PushPinIcon as PushPinLightIcon } from "../light/PushPin";
import { PushPinIcon as PushPinRegularIcon } from "../regular/PushPin";
import { PushPinIcon as PushPinThinIcon } from "../thin/PushPin";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PushPinThinIcon,
	light: PushPinLightIcon,
	regular: PushPinRegularIcon,
	bold: PushPinBoldIcon,
	fill: PushPinFillIcon,
	duotone: PushPinDuotoneIcon,
} as const;

export function PushPinIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PushPinIcon as PushPin };
