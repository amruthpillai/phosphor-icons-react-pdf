import { ApertureIcon as ApertureBoldIcon } from "../bold/Aperture";
import { ApertureIcon as ApertureDuotoneIcon } from "../duotone/Aperture";
import { ApertureIcon as ApertureFillIcon } from "../fill/Aperture";
import { ApertureIcon as ApertureLightIcon } from "../light/Aperture";
import { ApertureIcon as ApertureRegularIcon } from "../regular/Aperture";
import { ApertureIcon as ApertureThinIcon } from "../thin/Aperture";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ApertureThinIcon,
	light: ApertureLightIcon,
	regular: ApertureRegularIcon,
	bold: ApertureBoldIcon,
	fill: ApertureFillIcon,
	duotone: ApertureDuotoneIcon,
} as const;

export function ApertureIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ApertureIcon as Aperture };
