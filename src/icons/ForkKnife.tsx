import { ForkKnifeIcon as ForkKnifeBoldIcon } from "../bold/ForkKnife";
import { ForkKnifeIcon as ForkKnifeDuotoneIcon } from "../duotone/ForkKnife";
import { ForkKnifeIcon as ForkKnifeFillIcon } from "../fill/ForkKnife";
import { ForkKnifeIcon as ForkKnifeLightIcon } from "../light/ForkKnife";
import { ForkKnifeIcon as ForkKnifeRegularIcon } from "../regular/ForkKnife";
import { ForkKnifeIcon as ForkKnifeThinIcon } from "../thin/ForkKnife";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ForkKnifeThinIcon,
	light: ForkKnifeLightIcon,
	regular: ForkKnifeRegularIcon,
	bold: ForkKnifeBoldIcon,
	fill: ForkKnifeFillIcon,
	duotone: ForkKnifeDuotoneIcon,
} as const;

export function ForkKnifeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ForkKnifeIcon as ForkKnife };
