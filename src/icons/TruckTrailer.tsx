import { TruckTrailerIcon as TruckTrailerBoldIcon } from "../bold/TruckTrailer";
import { TruckTrailerIcon as TruckTrailerDuotoneIcon } from "../duotone/TruckTrailer";
import { TruckTrailerIcon as TruckTrailerFillIcon } from "../fill/TruckTrailer";
import { TruckTrailerIcon as TruckTrailerLightIcon } from "../light/TruckTrailer";
import { TruckTrailerIcon as TruckTrailerRegularIcon } from "../regular/TruckTrailer";
import { TruckTrailerIcon as TruckTrailerThinIcon } from "../thin/TruckTrailer";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TruckTrailerThinIcon,
	light: TruckTrailerLightIcon,
	regular: TruckTrailerRegularIcon,
	bold: TruckTrailerBoldIcon,
	fill: TruckTrailerFillIcon,
	duotone: TruckTrailerDuotoneIcon,
} as const;

export function TruckTrailerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TruckTrailerIcon as TruckTrailer };
