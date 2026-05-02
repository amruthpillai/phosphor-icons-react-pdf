import { ToiletIcon as ToiletBoldIcon } from "../bold/Toilet";
import { ToiletIcon as ToiletDuotoneIcon } from "../duotone/Toilet";
import { ToiletIcon as ToiletFillIcon } from "../fill/Toilet";
import { ToiletIcon as ToiletLightIcon } from "../light/Toilet";
import { ToiletIcon as ToiletRegularIcon } from "../regular/Toilet";
import { ToiletIcon as ToiletThinIcon } from "../thin/Toilet";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ToiletThinIcon,
	light: ToiletLightIcon,
	regular: ToiletRegularIcon,
	bold: ToiletBoldIcon,
	fill: ToiletFillIcon,
	duotone: ToiletDuotoneIcon,
} as const;

export function ToiletIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ToiletIcon as Toilet };
