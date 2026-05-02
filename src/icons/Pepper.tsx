import { PepperIcon as PepperBoldIcon } from "../bold/Pepper";
import { PepperIcon as PepperDuotoneIcon } from "../duotone/Pepper";
import { PepperIcon as PepperFillIcon } from "../fill/Pepper";
import { PepperIcon as PepperLightIcon } from "../light/Pepper";
import { PepperIcon as PepperRegularIcon } from "../regular/Pepper";
import { PepperIcon as PepperThinIcon } from "../thin/Pepper";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PepperThinIcon,
	light: PepperLightIcon,
	regular: PepperRegularIcon,
	bold: PepperBoldIcon,
	fill: PepperFillIcon,
	duotone: PepperDuotoneIcon,
} as const;

export function PepperIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PepperIcon as Pepper };
