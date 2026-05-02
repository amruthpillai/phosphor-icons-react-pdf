import { ShippingContainerIcon as ShippingContainerBoldIcon } from "../bold/ShippingContainer";
import { ShippingContainerIcon as ShippingContainerDuotoneIcon } from "../duotone/ShippingContainer";
import { ShippingContainerIcon as ShippingContainerFillIcon } from "../fill/ShippingContainer";
import { ShippingContainerIcon as ShippingContainerLightIcon } from "../light/ShippingContainer";
import { ShippingContainerIcon as ShippingContainerRegularIcon } from "../regular/ShippingContainer";
import { ShippingContainerIcon as ShippingContainerThinIcon } from "../thin/ShippingContainer";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShippingContainerThinIcon,
	light: ShippingContainerLightIcon,
	regular: ShippingContainerRegularIcon,
	bold: ShippingContainerBoldIcon,
	fill: ShippingContainerFillIcon,
	duotone: ShippingContainerDuotoneIcon,
} as const;

export function ShippingContainerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShippingContainerIcon as ShippingContainer };
