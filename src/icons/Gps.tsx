import { GpsIcon as GpsBoldIcon } from "../bold/Gps";
import { GpsIcon as GpsDuotoneIcon } from "../duotone/Gps";
import { GpsIcon as GpsFillIcon } from "../fill/Gps";
import { GpsIcon as GpsLightIcon } from "../light/Gps";
import { GpsIcon as GpsRegularIcon } from "../regular/Gps";
import { GpsIcon as GpsThinIcon } from "../thin/Gps";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GpsThinIcon,
	light: GpsLightIcon,
	regular: GpsRegularIcon,
	bold: GpsBoldIcon,
	fill: GpsFillIcon,
	duotone: GpsDuotoneIcon,
} as const;

export function GpsIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GpsIcon as Gps };
