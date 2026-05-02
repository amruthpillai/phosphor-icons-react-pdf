import { HouseLineIcon as HouseLineBoldIcon } from "../bold/HouseLine";
import { HouseLineIcon as HouseLineDuotoneIcon } from "../duotone/HouseLine";
import { HouseLineIcon as HouseLineFillIcon } from "../fill/HouseLine";
import { HouseLineIcon as HouseLineLightIcon } from "../light/HouseLine";
import { HouseLineIcon as HouseLineRegularIcon } from "../regular/HouseLine";
import { HouseLineIcon as HouseLineThinIcon } from "../thin/HouseLine";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HouseLineThinIcon,
	light: HouseLineLightIcon,
	regular: HouseLineRegularIcon,
	bold: HouseLineBoldIcon,
	fill: HouseLineFillIcon,
	duotone: HouseLineDuotoneIcon,
} as const;

export function HouseLineIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HouseLineIcon as HouseLine };
