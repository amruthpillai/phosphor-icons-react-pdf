import { DoorOpenIcon as DoorOpenBoldIcon } from "../bold/DoorOpen";
import { DoorOpenIcon as DoorOpenDuotoneIcon } from "../duotone/DoorOpen";
import { DoorOpenIcon as DoorOpenFillIcon } from "../fill/DoorOpen";
import { DoorOpenIcon as DoorOpenLightIcon } from "../light/DoorOpen";
import { DoorOpenIcon as DoorOpenRegularIcon } from "../regular/DoorOpen";
import { DoorOpenIcon as DoorOpenThinIcon } from "../thin/DoorOpen";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DoorOpenThinIcon,
	light: DoorOpenLightIcon,
	regular: DoorOpenRegularIcon,
	bold: DoorOpenBoldIcon,
	fill: DoorOpenFillIcon,
	duotone: DoorOpenDuotoneIcon,
} as const;

export function DoorOpenIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DoorOpenIcon as DoorOpen };
