import { MinusIcon as MinusBoldIcon } from "../bold/Minus";
import { MinusIcon as MinusDuotoneIcon } from "../duotone/Minus";
import { MinusIcon as MinusFillIcon } from "../fill/Minus";
import { MinusIcon as MinusLightIcon } from "../light/Minus";
import { MinusIcon as MinusRegularIcon } from "../regular/Minus";
import { MinusIcon as MinusThinIcon } from "../thin/Minus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MinusThinIcon,
	light: MinusLightIcon,
	regular: MinusRegularIcon,
	bold: MinusBoldIcon,
	fill: MinusFillIcon,
	duotone: MinusDuotoneIcon,
} as const;

export function MinusIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MinusIcon as Minus };
