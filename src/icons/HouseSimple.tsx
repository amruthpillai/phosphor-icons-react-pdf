import { HouseSimpleIcon as HouseSimpleBoldIcon } from "../bold/HouseSimple";
import { HouseSimpleIcon as HouseSimpleDuotoneIcon } from "../duotone/HouseSimple";
import { HouseSimpleIcon as HouseSimpleFillIcon } from "../fill/HouseSimple";
import { HouseSimpleIcon as HouseSimpleLightIcon } from "../light/HouseSimple";
import { HouseSimpleIcon as HouseSimpleRegularIcon } from "../regular/HouseSimple";
import { HouseSimpleIcon as HouseSimpleThinIcon } from "../thin/HouseSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HouseSimpleThinIcon,
	light: HouseSimpleLightIcon,
	regular: HouseSimpleRegularIcon,
	bold: HouseSimpleBoldIcon,
	fill: HouseSimpleFillIcon,
	duotone: HouseSimpleDuotoneIcon,
} as const;

export function HouseSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HouseSimpleIcon as HouseSimple };
