import { CarProfileIcon as CarProfileBoldIcon } from "../bold/CarProfile";
import { CarProfileIcon as CarProfileDuotoneIcon } from "../duotone/CarProfile";
import { CarProfileIcon as CarProfileFillIcon } from "../fill/CarProfile";
import { CarProfileIcon as CarProfileLightIcon } from "../light/CarProfile";
import { CarProfileIcon as CarProfileRegularIcon } from "../regular/CarProfile";
import { CarProfileIcon as CarProfileThinIcon } from "../thin/CarProfile";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CarProfileThinIcon,
	light: CarProfileLightIcon,
	regular: CarProfileRegularIcon,
	bold: CarProfileBoldIcon,
	fill: CarProfileFillIcon,
	duotone: CarProfileDuotoneIcon,
} as const;

export function CarProfileIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CarProfileIcon as CarProfile };
