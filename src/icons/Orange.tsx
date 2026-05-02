import { OrangeIcon as OrangeBoldIcon } from "../bold/Orange";
import { OrangeIcon as OrangeDuotoneIcon } from "../duotone/Orange";
import { OrangeIcon as OrangeFillIcon } from "../fill/Orange";
import { OrangeIcon as OrangeLightIcon } from "../light/Orange";
import { OrangeIcon as OrangeRegularIcon } from "../regular/Orange";
import { OrangeIcon as OrangeThinIcon } from "../thin/Orange";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: OrangeThinIcon,
	light: OrangeLightIcon,
	regular: OrangeRegularIcon,
	bold: OrangeBoldIcon,
	fill: OrangeFillIcon,
	duotone: OrangeDuotoneIcon,
} as const;

export function OrangeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { OrangeIcon as Orange };
