import { EyedropperIcon as EyedropperBoldIcon } from "../bold/Eyedropper";
import { EyedropperIcon as EyedropperDuotoneIcon } from "../duotone/Eyedropper";
import { EyedropperIcon as EyedropperFillIcon } from "../fill/Eyedropper";
import { EyedropperIcon as EyedropperLightIcon } from "../light/Eyedropper";
import { EyedropperIcon as EyedropperRegularIcon } from "../regular/Eyedropper";
import { EyedropperIcon as EyedropperThinIcon } from "../thin/Eyedropper";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EyedropperThinIcon,
	light: EyedropperLightIcon,
	regular: EyedropperRegularIcon,
	bold: EyedropperBoldIcon,
	fill: EyedropperFillIcon,
	duotone: EyedropperDuotoneIcon,
} as const;

export function EyedropperIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EyedropperIcon as Eyedropper };
