import { PhonePlusIcon as PhonePlusBoldIcon } from "../bold/PhonePlus";
import { PhonePlusIcon as PhonePlusDuotoneIcon } from "../duotone/PhonePlus";
import { PhonePlusIcon as PhonePlusFillIcon } from "../fill/PhonePlus";
import { PhonePlusIcon as PhonePlusLightIcon } from "../light/PhonePlus";
import { PhonePlusIcon as PhonePlusRegularIcon } from "../regular/PhonePlus";
import { PhonePlusIcon as PhonePlusThinIcon } from "../thin/PhonePlus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PhonePlusThinIcon,
	light: PhonePlusLightIcon,
	regular: PhonePlusRegularIcon,
	bold: PhonePlusBoldIcon,
	fill: PhonePlusFillIcon,
	duotone: PhonePlusDuotoneIcon,
} as const;

export function PhonePlusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PhonePlusIcon as PhonePlus };
