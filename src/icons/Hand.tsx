import { HandIcon as HandBoldIcon } from "../bold/Hand";
import { HandIcon as HandDuotoneIcon } from "../duotone/Hand";
import { HandIcon as HandFillIcon } from "../fill/Hand";
import { HandIcon as HandLightIcon } from "../light/Hand";
import { HandIcon as HandRegularIcon } from "../regular/Hand";
import { HandIcon as HandThinIcon } from "../thin/Hand";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HandThinIcon,
	light: HandLightIcon,
	regular: HandRegularIcon,
	bold: HandBoldIcon,
	fill: HandFillIcon,
	duotone: HandDuotoneIcon,
} as const;

export function HandIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HandIcon as Hand };
