import { PanoramaIcon as PanoramaBoldIcon } from "../bold/Panorama";
import { PanoramaIcon as PanoramaDuotoneIcon } from "../duotone/Panorama";
import { PanoramaIcon as PanoramaFillIcon } from "../fill/Panorama";
import { PanoramaIcon as PanoramaLightIcon } from "../light/Panorama";
import { PanoramaIcon as PanoramaRegularIcon } from "../regular/Panorama";
import { PanoramaIcon as PanoramaThinIcon } from "../thin/Panorama";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PanoramaThinIcon,
	light: PanoramaLightIcon,
	regular: PanoramaRegularIcon,
	bold: PanoramaBoldIcon,
	fill: PanoramaFillIcon,
	duotone: PanoramaDuotoneIcon,
} as const;

export function PanoramaIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PanoramaIcon as Panorama };
