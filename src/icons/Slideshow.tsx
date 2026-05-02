import { SlideshowIcon as SlideshowBoldIcon } from "../bold/Slideshow";
import { SlideshowIcon as SlideshowDuotoneIcon } from "../duotone/Slideshow";
import { SlideshowIcon as SlideshowFillIcon } from "../fill/Slideshow";
import { SlideshowIcon as SlideshowLightIcon } from "../light/Slideshow";
import { SlideshowIcon as SlideshowRegularIcon } from "../regular/Slideshow";
import { SlideshowIcon as SlideshowThinIcon } from "../thin/Slideshow";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SlideshowThinIcon,
	light: SlideshowLightIcon,
	regular: SlideshowRegularIcon,
	bold: SlideshowBoldIcon,
	fill: SlideshowFillIcon,
	duotone: SlideshowDuotoneIcon,
} as const;

export function SlideshowIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SlideshowIcon as Slideshow };
