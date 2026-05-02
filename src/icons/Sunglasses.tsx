import { SunglassesIcon as SunglassesBoldIcon } from "../bold/Sunglasses";
import { SunglassesIcon as SunglassesDuotoneIcon } from "../duotone/Sunglasses";
import { SunglassesIcon as SunglassesFillIcon } from "../fill/Sunglasses";
import { SunglassesIcon as SunglassesLightIcon } from "../light/Sunglasses";
import { SunglassesIcon as SunglassesRegularIcon } from "../regular/Sunglasses";
import { SunglassesIcon as SunglassesThinIcon } from "../thin/Sunglasses";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SunglassesThinIcon,
	light: SunglassesLightIcon,
	regular: SunglassesRegularIcon,
	bold: SunglassesBoldIcon,
	fill: SunglassesFillIcon,
	duotone: SunglassesDuotoneIcon,
} as const;

export function SunglassesIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SunglassesIcon as Sunglasses };
