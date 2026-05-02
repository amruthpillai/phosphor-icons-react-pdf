import { SneakerIcon as SneakerBoldIcon } from "../bold/Sneaker";
import { SneakerIcon as SneakerDuotoneIcon } from "../duotone/Sneaker";
import { SneakerIcon as SneakerFillIcon } from "../fill/Sneaker";
import { SneakerIcon as SneakerLightIcon } from "../light/Sneaker";
import { SneakerIcon as SneakerRegularIcon } from "../regular/Sneaker";
import { SneakerIcon as SneakerThinIcon } from "../thin/Sneaker";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SneakerThinIcon,
	light: SneakerLightIcon,
	regular: SneakerRegularIcon,
	bold: SneakerBoldIcon,
	fill: SneakerFillIcon,
	duotone: SneakerDuotoneIcon,
} as const;

export function SneakerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SneakerIcon as Sneaker };
