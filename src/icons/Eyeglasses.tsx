import { EyeglassesIcon as EyeglassesBoldIcon } from "../bold/Eyeglasses";
import { EyeglassesIcon as EyeglassesDuotoneIcon } from "../duotone/Eyeglasses";
import { EyeglassesIcon as EyeglassesFillIcon } from "../fill/Eyeglasses";
import { EyeglassesIcon as EyeglassesLightIcon } from "../light/Eyeglasses";
import { EyeglassesIcon as EyeglassesRegularIcon } from "../regular/Eyeglasses";
import { EyeglassesIcon as EyeglassesThinIcon } from "../thin/Eyeglasses";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EyeglassesThinIcon,
	light: EyeglassesLightIcon,
	regular: EyeglassesRegularIcon,
	bold: EyeglassesBoldIcon,
	fill: EyeglassesFillIcon,
	duotone: EyeglassesDuotoneIcon,
} as const;

export function EyeglassesIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EyeglassesIcon as Eyeglasses };
