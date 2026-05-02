import { CubeFocusIcon as CubeFocusBoldIcon } from "../bold/CubeFocus";
import { CubeFocusIcon as CubeFocusDuotoneIcon } from "../duotone/CubeFocus";
import { CubeFocusIcon as CubeFocusFillIcon } from "../fill/CubeFocus";
import { CubeFocusIcon as CubeFocusLightIcon } from "../light/CubeFocus";
import { CubeFocusIcon as CubeFocusRegularIcon } from "../regular/CubeFocus";
import { CubeFocusIcon as CubeFocusThinIcon } from "../thin/CubeFocus";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CubeFocusThinIcon,
	light: CubeFocusLightIcon,
	regular: CubeFocusRegularIcon,
	bold: CubeFocusBoldIcon,
	fill: CubeFocusFillIcon,
	duotone: CubeFocusDuotoneIcon,
} as const;

export function CubeFocusIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CubeFocusIcon as CubeFocus };
