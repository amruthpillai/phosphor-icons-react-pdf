import { BeanieIcon as BeanieBoldIcon } from "../bold/Beanie";
import { BeanieIcon as BeanieDuotoneIcon } from "../duotone/Beanie";
import { BeanieIcon as BeanieFillIcon } from "../fill/Beanie";
import { BeanieIcon as BeanieLightIcon } from "../light/Beanie";
import { BeanieIcon as BeanieRegularIcon } from "../regular/Beanie";
import { BeanieIcon as BeanieThinIcon } from "../thin/Beanie";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BeanieThinIcon,
	light: BeanieLightIcon,
	regular: BeanieRegularIcon,
	bold: BeanieBoldIcon,
	fill: BeanieFillIcon,
	duotone: BeanieDuotoneIcon,
} as const;

export function BeanieIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BeanieIcon as Beanie };
