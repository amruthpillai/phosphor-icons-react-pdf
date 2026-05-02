import { FlowerIcon as FlowerBoldIcon } from "../bold/Flower";
import { FlowerIcon as FlowerDuotoneIcon } from "../duotone/Flower";
import { FlowerIcon as FlowerFillIcon } from "../fill/Flower";
import { FlowerIcon as FlowerLightIcon } from "../light/Flower";
import { FlowerIcon as FlowerRegularIcon } from "../regular/Flower";
import { FlowerIcon as FlowerThinIcon } from "../thin/Flower";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FlowerThinIcon,
	light: FlowerLightIcon,
	regular: FlowerRegularIcon,
	bold: FlowerBoldIcon,
	fill: FlowerFillIcon,
	duotone: FlowerDuotoneIcon,
} as const;

export function FlowerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FlowerIcon as Flower };
