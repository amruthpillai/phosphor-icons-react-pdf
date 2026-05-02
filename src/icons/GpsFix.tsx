import { GpsFixIcon as GpsFixBoldIcon } from "../bold/GpsFix";
import { GpsFixIcon as GpsFixDuotoneIcon } from "../duotone/GpsFix";
import { GpsFixIcon as GpsFixFillIcon } from "../fill/GpsFix";
import { GpsFixIcon as GpsFixLightIcon } from "../light/GpsFix";
import { GpsFixIcon as GpsFixRegularIcon } from "../regular/GpsFix";
import { GpsFixIcon as GpsFixThinIcon } from "../thin/GpsFix";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GpsFixThinIcon,
	light: GpsFixLightIcon,
	regular: GpsFixRegularIcon,
	bold: GpsFixBoldIcon,
	fill: GpsFixFillIcon,
	duotone: GpsFixDuotoneIcon,
} as const;

export function GpsFixIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GpsFixIcon as GpsFix };
