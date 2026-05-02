import { CompassIcon as CompassBoldIcon } from "../bold/Compass";
import { CompassIcon as CompassDuotoneIcon } from "../duotone/Compass";
import { CompassIcon as CompassFillIcon } from "../fill/Compass";
import { CompassIcon as CompassLightIcon } from "../light/Compass";
import { CompassIcon as CompassRegularIcon } from "../regular/Compass";
import { CompassIcon as CompassThinIcon } from "../thin/Compass";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CompassThinIcon,
	light: CompassLightIcon,
	regular: CompassRegularIcon,
	bold: CompassBoldIcon,
	fill: CompassFillIcon,
	duotone: CompassDuotoneIcon,
} as const;

export function CompassIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CompassIcon as Compass };
