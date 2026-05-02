import { UmbrellaIcon as UmbrellaBoldIcon } from "../bold/Umbrella";
import { UmbrellaIcon as UmbrellaDuotoneIcon } from "../duotone/Umbrella";
import { UmbrellaIcon as UmbrellaFillIcon } from "../fill/Umbrella";
import { UmbrellaIcon as UmbrellaLightIcon } from "../light/Umbrella";
import { UmbrellaIcon as UmbrellaRegularIcon } from "../regular/Umbrella";
import { UmbrellaIcon as UmbrellaThinIcon } from "../thin/Umbrella";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UmbrellaThinIcon,
	light: UmbrellaLightIcon,
	regular: UmbrellaRegularIcon,
	bold: UmbrellaBoldIcon,
	fill: UmbrellaFillIcon,
	duotone: UmbrellaDuotoneIcon,
} as const;

export function UmbrellaIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UmbrellaIcon as Umbrella };
