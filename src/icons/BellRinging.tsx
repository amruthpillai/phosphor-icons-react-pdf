import { BellRingingIcon as BellRingingBoldIcon } from "../bold/BellRinging";
import { BellRingingIcon as BellRingingDuotoneIcon } from "../duotone/BellRinging";
import { BellRingingIcon as BellRingingFillIcon } from "../fill/BellRinging";
import { BellRingingIcon as BellRingingLightIcon } from "../light/BellRinging";
import { BellRingingIcon as BellRingingRegularIcon } from "../regular/BellRinging";
import { BellRingingIcon as BellRingingThinIcon } from "../thin/BellRinging";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BellRingingThinIcon,
	light: BellRingingLightIcon,
	regular: BellRingingRegularIcon,
	bold: BellRingingBoldIcon,
	fill: BellRingingFillIcon,
	duotone: BellRingingDuotoneIcon,
} as const;

export function BellRingingIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BellRingingIcon as BellRinging };
