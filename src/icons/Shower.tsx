import { ShowerIcon as ShowerBoldIcon } from "../bold/Shower";
import { ShowerIcon as ShowerDuotoneIcon } from "../duotone/Shower";
import { ShowerIcon as ShowerFillIcon } from "../fill/Shower";
import { ShowerIcon as ShowerLightIcon } from "../light/Shower";
import { ShowerIcon as ShowerRegularIcon } from "../regular/Shower";
import { ShowerIcon as ShowerThinIcon } from "../thin/Shower";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ShowerThinIcon,
	light: ShowerLightIcon,
	regular: ShowerRegularIcon,
	bold: ShowerBoldIcon,
	fill: ShowerFillIcon,
	duotone: ShowerDuotoneIcon,
} as const;

export function ShowerIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ShowerIcon as Shower };
