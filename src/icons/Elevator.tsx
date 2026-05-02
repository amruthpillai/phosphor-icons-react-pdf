import { ElevatorIcon as ElevatorBoldIcon } from "../bold/Elevator";
import { ElevatorIcon as ElevatorDuotoneIcon } from "../duotone/Elevator";
import { ElevatorIcon as ElevatorFillIcon } from "../fill/Elevator";
import { ElevatorIcon as ElevatorLightIcon } from "../light/Elevator";
import { ElevatorIcon as ElevatorRegularIcon } from "../regular/Elevator";
import { ElevatorIcon as ElevatorThinIcon } from "../thin/Elevator";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ElevatorThinIcon,
	light: ElevatorLightIcon,
	regular: ElevatorRegularIcon,
	bold: ElevatorBoldIcon,
	fill: ElevatorFillIcon,
	duotone: ElevatorDuotoneIcon,
} as const;

export function ElevatorIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ElevatorIcon as Elevator };
