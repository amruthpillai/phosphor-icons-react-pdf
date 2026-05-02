import { ShoppingBagOpenIcon as ShoppingBagOpenBoldIcon } from "../bold/ShoppingBagOpen";
import { ShoppingBagOpenIcon as ShoppingBagOpenDuotoneIcon } from "../duotone/ShoppingBagOpen";
import { ShoppingBagOpenIcon as ShoppingBagOpenFillIcon } from "../fill/ShoppingBagOpen";
import { ShoppingBagOpenIcon as ShoppingBagOpenLightIcon } from "../light/ShoppingBagOpen";
import { ShoppingBagOpenIcon as ShoppingBagOpenRegularIcon } from "../regular/ShoppingBagOpen";
import { ShoppingBagOpenIcon as ShoppingBagOpenThinIcon } from "../thin/ShoppingBagOpen";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShoppingBagOpenThinIcon,
	light: ShoppingBagOpenLightIcon,
	regular: ShoppingBagOpenRegularIcon,
	bold: ShoppingBagOpenBoldIcon,
	fill: ShoppingBagOpenFillIcon,
	duotone: ShoppingBagOpenDuotoneIcon,
} as const;

export function ShoppingBagOpenIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShoppingBagOpenIcon as ShoppingBagOpen };
