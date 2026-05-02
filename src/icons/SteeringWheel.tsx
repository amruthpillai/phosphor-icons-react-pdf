import { SteeringWheelIcon as SteeringWheelBoldIcon } from "../bold/SteeringWheel";
import { SteeringWheelIcon as SteeringWheelDuotoneIcon } from "../duotone/SteeringWheel";
import { SteeringWheelIcon as SteeringWheelFillIcon } from "../fill/SteeringWheel";
import { SteeringWheelIcon as SteeringWheelLightIcon } from "../light/SteeringWheel";
import { SteeringWheelIcon as SteeringWheelRegularIcon } from "../regular/SteeringWheel";
import { SteeringWheelIcon as SteeringWheelThinIcon } from "../thin/SteeringWheel";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SteeringWheelThinIcon,
	light: SteeringWheelLightIcon,
	regular: SteeringWheelRegularIcon,
	bold: SteeringWheelBoldIcon,
	fill: SteeringWheelFillIcon,
	duotone: SteeringWheelDuotoneIcon,
} as const;

export function SteeringWheelIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SteeringWheelIcon as SteeringWheel };
