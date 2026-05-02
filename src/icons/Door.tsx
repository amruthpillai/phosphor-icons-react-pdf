import { DoorIcon as DoorBoldIcon } from "../bold/Door";
import { DoorIcon as DoorDuotoneIcon } from "../duotone/Door";
import { DoorIcon as DoorFillIcon } from "../fill/Door";
import { DoorIcon as DoorLightIcon } from "../light/Door";
import { DoorIcon as DoorRegularIcon } from "../regular/Door";
import { DoorIcon as DoorThinIcon } from "../thin/Door";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DoorThinIcon,
	light: DoorLightIcon,
	regular: DoorRegularIcon,
	bold: DoorBoldIcon,
	fill: DoorFillIcon,
	duotone: DoorDuotoneIcon,
} as const;

export function DoorIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DoorIcon as Door };
