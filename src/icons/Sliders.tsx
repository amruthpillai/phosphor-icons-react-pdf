import { SlidersIcon as SlidersBoldIcon } from "../bold/Sliders";
import { SlidersIcon as SlidersDuotoneIcon } from "../duotone/Sliders";
import { SlidersIcon as SlidersFillIcon } from "../fill/Sliders";
import { SlidersIcon as SlidersLightIcon } from "../light/Sliders";
import { SlidersIcon as SlidersRegularIcon } from "../regular/Sliders";
import { SlidersIcon as SlidersThinIcon } from "../thin/Sliders";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SlidersThinIcon,
	light: SlidersLightIcon,
	regular: SlidersRegularIcon,
	bold: SlidersBoldIcon,
	fill: SlidersFillIcon,
	duotone: SlidersDuotoneIcon,
} as const;

export function SlidersIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SlidersIcon as Sliders };
