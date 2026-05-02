import { HouseIcon as HouseBoldIcon } from "../bold/House";
import { HouseIcon as HouseDuotoneIcon } from "../duotone/House";
import { HouseIcon as HouseFillIcon } from "../fill/House";
import { HouseIcon as HouseLightIcon } from "../light/House";
import { HouseIcon as HouseRegularIcon } from "../regular/House";
import { HouseIcon as HouseThinIcon } from "../thin/House";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HouseThinIcon,
	light: HouseLightIcon,
	regular: HouseRegularIcon,
	bold: HouseBoldIcon,
	fill: HouseFillIcon,
	duotone: HouseDuotoneIcon,
} as const;

export function HouseIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HouseIcon as House };
