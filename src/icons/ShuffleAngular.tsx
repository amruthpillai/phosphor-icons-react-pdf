import { ShuffleAngularIcon as ShuffleAngularBoldIcon } from "../bold/ShuffleAngular";
import { ShuffleAngularIcon as ShuffleAngularDuotoneIcon } from "../duotone/ShuffleAngular";
import { ShuffleAngularIcon as ShuffleAngularFillIcon } from "../fill/ShuffleAngular";
import { ShuffleAngularIcon as ShuffleAngularLightIcon } from "../light/ShuffleAngular";
import { ShuffleAngularIcon as ShuffleAngularRegularIcon } from "../regular/ShuffleAngular";
import { ShuffleAngularIcon as ShuffleAngularThinIcon } from "../thin/ShuffleAngular";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShuffleAngularThinIcon,
	light: ShuffleAngularLightIcon,
	regular: ShuffleAngularRegularIcon,
	bold: ShuffleAngularBoldIcon,
	fill: ShuffleAngularFillIcon,
	duotone: ShuffleAngularDuotoneIcon,
} as const;

export function ShuffleAngularIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShuffleAngularIcon as ShuffleAngular };
