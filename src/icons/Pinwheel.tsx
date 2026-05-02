import { PinwheelIcon as PinwheelBoldIcon } from "../bold/Pinwheel";
import { PinwheelIcon as PinwheelDuotoneIcon } from "../duotone/Pinwheel";
import { PinwheelIcon as PinwheelFillIcon } from "../fill/Pinwheel";
import { PinwheelIcon as PinwheelLightIcon } from "../light/Pinwheel";
import { PinwheelIcon as PinwheelRegularIcon } from "../regular/Pinwheel";
import { PinwheelIcon as PinwheelThinIcon } from "../thin/Pinwheel";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PinwheelThinIcon,
	light: PinwheelLightIcon,
	regular: PinwheelRegularIcon,
	bold: PinwheelBoldIcon,
	fill: PinwheelFillIcon,
	duotone: PinwheelDuotoneIcon,
} as const;

export function PinwheelIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PinwheelIcon as Pinwheel };
