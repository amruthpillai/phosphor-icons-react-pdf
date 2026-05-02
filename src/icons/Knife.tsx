import { KnifeIcon as KnifeBoldIcon } from "../bold/Knife";
import { KnifeIcon as KnifeDuotoneIcon } from "../duotone/Knife";
import { KnifeIcon as KnifeFillIcon } from "../fill/Knife";
import { KnifeIcon as KnifeLightIcon } from "../light/Knife";
import { KnifeIcon as KnifeRegularIcon } from "../regular/Knife";
import { KnifeIcon as KnifeThinIcon } from "../thin/Knife";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: KnifeThinIcon,
	light: KnifeLightIcon,
	regular: KnifeRegularIcon,
	bold: KnifeBoldIcon,
	fill: KnifeFillIcon,
	duotone: KnifeDuotoneIcon,
} as const;

export function KnifeIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { KnifeIcon as Knife };
