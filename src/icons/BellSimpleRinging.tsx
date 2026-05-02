import { BellSimpleRingingIcon as BellSimpleRingingBoldIcon } from "../bold/BellSimpleRinging";
import { BellSimpleRingingIcon as BellSimpleRingingDuotoneIcon } from "../duotone/BellSimpleRinging";
import { BellSimpleRingingIcon as BellSimpleRingingFillIcon } from "../fill/BellSimpleRinging";
import { BellSimpleRingingIcon as BellSimpleRingingLightIcon } from "../light/BellSimpleRinging";
import { BellSimpleRingingIcon as BellSimpleRingingRegularIcon } from "../regular/BellSimpleRinging";
import { BellSimpleRingingIcon as BellSimpleRingingThinIcon } from "../thin/BellSimpleRinging";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BellSimpleRingingThinIcon,
	light: BellSimpleRingingLightIcon,
	regular: BellSimpleRingingRegularIcon,
	bold: BellSimpleRingingBoldIcon,
	fill: BellSimpleRingingFillIcon,
	duotone: BellSimpleRingingDuotoneIcon,
} as const;

export function BellSimpleRingingIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BellSimpleRingingIcon as BellSimpleRinging };
