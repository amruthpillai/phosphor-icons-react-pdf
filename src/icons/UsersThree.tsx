import { UsersThreeIcon as UsersThreeBoldIcon } from "../bold/UsersThree";
import { UsersThreeIcon as UsersThreeDuotoneIcon } from "../duotone/UsersThree";
import { UsersThreeIcon as UsersThreeFillIcon } from "../fill/UsersThree";
import { UsersThreeIcon as UsersThreeLightIcon } from "../light/UsersThree";
import { UsersThreeIcon as UsersThreeRegularIcon } from "../regular/UsersThree";
import { UsersThreeIcon as UsersThreeThinIcon } from "../thin/UsersThree";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UsersThreeThinIcon,
	light: UsersThreeLightIcon,
	regular: UsersThreeRegularIcon,
	bold: UsersThreeBoldIcon,
	fill: UsersThreeFillIcon,
	duotone: UsersThreeDuotoneIcon,
} as const;

export function UsersThreeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UsersThreeIcon as UsersThree };
