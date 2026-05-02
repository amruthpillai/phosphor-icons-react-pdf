import { IceCreamIcon as IceCreamBoldIcon } from "../bold/IceCream";
import { IceCreamIcon as IceCreamDuotoneIcon } from "../duotone/IceCream";
import { IceCreamIcon as IceCreamFillIcon } from "../fill/IceCream";
import { IceCreamIcon as IceCreamLightIcon } from "../light/IceCream";
import { IceCreamIcon as IceCreamRegularIcon } from "../regular/IceCream";
import { IceCreamIcon as IceCreamThinIcon } from "../thin/IceCream";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: IceCreamThinIcon,
	light: IceCreamLightIcon,
	regular: IceCreamRegularIcon,
	bold: IceCreamBoldIcon,
	fill: IceCreamFillIcon,
	duotone: IceCreamDuotoneIcon,
} as const;

export function IceCreamIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { IceCreamIcon as IceCream };
