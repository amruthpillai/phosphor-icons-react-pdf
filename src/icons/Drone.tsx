import { DroneIcon as DroneBoldIcon } from "../bold/Drone";
import { DroneIcon as DroneDuotoneIcon } from "../duotone/Drone";
import { DroneIcon as DroneFillIcon } from "../fill/Drone";
import { DroneIcon as DroneLightIcon } from "../light/Drone";
import { DroneIcon as DroneRegularIcon } from "../regular/Drone";
import { DroneIcon as DroneThinIcon } from "../thin/Drone";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DroneThinIcon,
	light: DroneLightIcon,
	regular: DroneRegularIcon,
	bold: DroneBoldIcon,
	fill: DroneFillIcon,
	duotone: DroneDuotoneIcon,
} as const;

export function DroneIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DroneIcon as Drone };
