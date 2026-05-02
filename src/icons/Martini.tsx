import { MartiniIcon as MartiniBoldIcon } from "../bold/Martini";
import { MartiniIcon as MartiniDuotoneIcon } from "../duotone/Martini";
import { MartiniIcon as MartiniFillIcon } from "../fill/Martini";
import { MartiniIcon as MartiniLightIcon } from "../light/Martini";
import { MartiniIcon as MartiniRegularIcon } from "../regular/Martini";
import { MartiniIcon as MartiniThinIcon } from "../thin/Martini";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MartiniThinIcon,
	light: MartiniLightIcon,
	regular: MartiniRegularIcon,
	bold: MartiniBoldIcon,
	fill: MartiniFillIcon,
	duotone: MartiniDuotoneIcon,
} as const;

export function MartiniIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MartiniIcon as Martini };
